/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getCurrentUser } from "./graphql/queries";
import { updateCurrentUser } from "./graphql/mutations";
import { FileUploader } from "@aws-amplify/ui-react-storage";
import { VisuallyHidden } from '@aws-amplify/ui-react';

const client = generateClient();
export default function CurrentUserUpdateForm(props) {
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
    imagePath: "../assets/avatar.jpg",
  };
  const [loginID, setLoginID] = React.useState(initialValues.loginID);
  const [sub, setSub] = React.useState(initialValues.sub);
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [bio, setBio] = React.useState(initialValues.bio);
  const [birthdate, setBirthdate] = React.useState(initialValues.birthdate);
  const [imagePath, setImagePath] = React.useState(initialValues.imagePath);
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
    setImagePath(cleanValues.imagePath);
    setErrors({});
  };
  const [currentUserRecord, setCurrentUserRecord] =
    React.useState(currentUserModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCurrentUser.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCurrentUser
        : currentUserModelProp;
      setCurrentUserRecord(record);
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
    imagePath: [],
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
          imagePath: imagePath ?? null,
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
            query: updateCurrentUser.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "CurrentUserUpdateForm")}
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
              birthdate,
              imagePath,
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
              birthdate,
              imagePath,
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
              birthdate,
              imagePath,
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
              birthdate,
              imagePath,
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
              birthdate,
              imagePath,
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
              imagePath,
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
      {/* <TextField
        label="Image path"
        isRequired={false}
        isReadOnly={false}
        value={imagePath}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              loginID,
              sub,
              name,
              email,
              bio,
              birthdate,
              imagePath: value,
            };
            const result = onChange(modelFields);
            value = result?.imagePath ?? value;
          }
          if (errors.imagePath?.hasError) {
            runValidationTasks("imagePath", value);
          }
          setImagePath(value);
        }}
        onBlur={() => runValidationTasks("imagePath", imagePath)}
        errorMessage={errors.imagePath?.errorMessage}
        hasError={errors.imagePath?.hasError}
        {...getOverrideProps(overrides, "imagePath")}
      ></TextField> */}
       <FileUploader
        acceptedFileTypes={['image/*']}
        path="public/"
        maxFileCount={1}
        isResumable
      />
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
