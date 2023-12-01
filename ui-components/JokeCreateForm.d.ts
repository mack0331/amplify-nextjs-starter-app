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
export declare type JokeCreateFormInputValues = {
    body?: string;
    punchline?: string;
    date?: string;
    owner?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type JokeCreateFormValidationValues = {
    body?: ValidationFunction<string>;
    punchline?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JokeCreateFormOverridesProps = {
    JokeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    punchline?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JokeCreateFormProps = React.PropsWithChildren<{
    overrides?: JokeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: JokeCreateFormInputValues) => JokeCreateFormInputValues;
    onSuccess?: (fields: JokeCreateFormInputValues) => void;
    onError?: (fields: JokeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JokeCreateFormInputValues) => JokeCreateFormInputValues;
    onValidate?: JokeCreateFormValidationValues;
} & React.CSSProperties>;
export default function JokeCreateForm(props: JokeCreateFormProps): React.ReactElement;
