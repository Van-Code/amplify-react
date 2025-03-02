/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getUser } from "./graphql/queries";
import { updateUser } from "./graphql/mutations";
import { VisuallyHidden } from '@aws-amplify/ui-react';
import  PhotoUploader  from '../src/PhotoUploader';
import '@aws-amplify/ui-react/styles.css';


const client = generateClient();


export default function UserUpdateForm(props) {
  const {
    id: idProp,
    currentUser: currentUserModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    loginID: "",
    sub: "",
    name: "",
    email: "",
    bio: "",
    birthdate: "",
  };
  const [loginID, setLoginID] = React.useState(initialValues.loginID);
  const [sub, setSub] = React.useState(initialValues.sub);
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [bio, setBio] = React.useState(initialValues.bio);
  const [birthdate, setBirthdate] = React.useState(initialValues.birthdate);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = currentUserRecord
      ? { ...initialValues, ...currentUserRecord }
      : initialValues;
    setLoginID(cleanValues.loginID);
    setSub(cleanValues.sub);
    setName(cleanValues.name);
    setEmail(cleanValues.email);
    setBio(cleanValues.bio);
    setBirthdate(cleanValues.birthdate);
    setErrors({});
  };
  const [currentUserRecord, setUserRecord] =
  React.useState(currentUserModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUser.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUser
        : currentUserModelProp;
      setUserRecord(record);
    };
    queryData();
  }, [idProp, currentUserModelProp]);
  React.useEffect(resetStateValues, [currentUserRecord]);
  const validations = {
    loginID: [],
    sub: [],
    name: [],
    email: [{ type: "Email" }],
    bio: [],
    birthdate: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  
    const createUser = async () => {
      await client.models.User.create({
        email: email ?? null,
        name: name ?? null,
        bio: bio ?? null,
      })
    }
  

  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          loginID: loginID ?? null,
          sub: sub ?? null,
          name: name ?? null,
          email: email ?? null,
          bio: bio ?? null,
          birthdate: birthdate ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateUser.replaceAll("__typename", ""),
            variables: {
              input: {
                id: currentUserRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserUpdateForm")}
      {...rest}
    > <VisuallyHidden>
      <TextField
        label="Login id"
        isRequired={false}
        isReadOnly={false}
        value={loginID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginID: value,
              sub,
              name,
              email,
              bio,
              birthdate
            };
            const result = onChange(modelFields);
            value = result?.loginID ?? value;
          }
          if (errors.loginID?.hasError) {
            runValidationTasks("loginID", value);
          }
          setLoginID(value);
        }}
        onBlur={() => runValidationTasks("loginID", loginID)}
        errorMessage={errors.loginID?.errorMessage}
        hasError={errors.loginID?.hasError}
        {...getOverrideProps(overrides, "loginID")}
      ></TextField>
      <TextField
        label="Sub"
        isRequired={false}
        isReadOnly={false}
        value={sub}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginID,
              sub: value,
              name,
              email,
              bio,
              birthdate
            };
            const result = onChange(modelFields);
            value = result?.sub ?? value;
          }
          if (errors.sub?.hasError) {
            runValidationTasks("sub", value);
          }
          setSub(value);
        }}
        onBlur={() => runValidationTasks("sub", sub)}
        errorMessage={errors.sub?.errorMessage}
        hasError={errors.sub?.hasError}
        {...getOverrideProps(overrides, "sub")}
      ></TextField>
      </VisuallyHidden>
      <PhotoUploader/>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginID,
              sub,
              name: value,
              email,
              bio,
              birthdate
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginID,
              sub,
              name,
              email: value,
              bio,
              birthdate
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Bio"
        isRequired={false}
        isReadOnly={false}
        value={bio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginID,
              sub,
              name,
              email,
              bio: value,
              birthdate
            };
            const result = onChange(modelFields);
            value = result?.bio ?? value;
          }
          if (errors.bio?.hasError) {
            runValidationTasks("bio", value);
          }
          setBio(value);
        }}
        onBlur={() => runValidationTasks("bio", bio)}
        errorMessage={errors.bio?.errorMessage}
        hasError={errors.bio?.hasError}
        {...getOverrideProps(overrides, "bio")}
      ></TextField>
       <VisuallyHidden><TextField
        label="Birthdate"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={birthdate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginID,
              sub,
              name,
              email,
              bio,
              birthdate: value,
            };
            const result = onChange(modelFields);
            value = result?.birthdate ?? value;
          }
          if (errors.birthdate?.hasError) {
            runValidationTasks("birthdate", value);
          }
          setBirthdate(value);
        }}
        onBlur={() => runValidationTasks("birthdate", birthdate)}
        errorMessage={errors.birthdate?.errorMessage}
        hasError={errors.birthdate?.hasError}
        {...getOverrideProps(overrides, "birthdate")}
      ></TextField></VisuallyHidden>
   
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || currentUserModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            onSubmit={createUser}
            isDisabled={
              !(idProp || currentUserModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
           
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
