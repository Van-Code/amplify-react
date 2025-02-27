import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CurrentUserCreateFormInputValues = {
    loginID?: string;
    sub?: string;
    name?: string;
    email?: string;
    bio?: string;
    birthdate?: string;
    imagePath?: string;
};
export declare type CurrentUserCreateFormValidationValues = {
    loginID?: ValidationFunction<string>;
    sub?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    birthdate?: ValidationFunction<string>;
    imagePath?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CurrentUserCreateFormOverridesProps = {
    CurrentUserCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    loginID?: PrimitiveOverrideProps<TextFieldProps>;
    sub?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
    birthdate?: PrimitiveOverrideProps<TextFieldProps>;
    imagePath?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CurrentUserCreateFormProps = React.PropsWithChildren<{
    overrides?: CurrentUserCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CurrentUserCreateFormInputValues) => CurrentUserCreateFormInputValues;
    onSuccess?: (fields: CurrentUserCreateFormInputValues) => void;
    onError?: (fields: CurrentUserCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CurrentUserCreateFormInputValues) => CurrentUserCreateFormInputValues;
    onValidate?: CurrentUserCreateFormValidationValues;
} & React.CSSProperties>;
export default function CurrentUserCreateForm(props: CurrentUserCreateFormProps): React.ReactElement;
