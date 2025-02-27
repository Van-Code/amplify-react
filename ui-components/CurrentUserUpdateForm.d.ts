import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CurrentUser } from "../src/types";

export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CurrentUserUpdateFormInputValues = {
    loginID?: string;
    sub?: string;
    name?: string;
    email?: string;
    bio?: string;
    birthdate?: string;
    imagePath?: string;
};
export declare type CurrentUserUpdateFormValidationValues = {
    loginID?: ValidationFunction<string>;
    sub?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    birthdate?: ValidationFunction<string>;
    imagePath?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CurrentUserUpdateFormOverridesProps = {
    CurrentUserUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    loginID?: PrimitiveOverrideProps<TextFieldProps>;
    sub?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
    birthdate?: PrimitiveOverrideProps<TextFieldProps>;
    imagePath?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CurrentUserUpdateFormProps = React.PropsWithChildren<{
    overrides?: CurrentUserUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    currentUser?: CurrentUser;
    onSubmit?: (fields: CurrentUserUpdateFormInputValues) => CurrentUserUpdateFormInputValues;
    onSuccess?: (fields: CurrentUserUpdateFormInputValues) => void;
    onError?: (fields: CurrentUserUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CurrentUserUpdateFormInputValues) => CurrentUserUpdateFormInputValues;
    onValidate?: CurrentUserUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CurrentUserUpdateForm(props: CurrentUserUpdateFormProps): React.ReactElement;
