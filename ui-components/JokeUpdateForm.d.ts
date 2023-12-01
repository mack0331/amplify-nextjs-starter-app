import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Joke } from "./graphql/types";
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
export declare type JokeUpdateFormInputValues = {
    body?: string;
    punchline?: string;
    date?: string;
    owner?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type JokeUpdateFormValidationValues = {
    body?: ValidationFunction<string>;
    punchline?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JokeUpdateFormOverridesProps = {
    JokeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    punchline?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JokeUpdateFormProps = React.PropsWithChildren<{
    overrides?: JokeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    joke?: Joke;
    onSubmit?: (fields: JokeUpdateFormInputValues) => JokeUpdateFormInputValues;
    onSuccess?: (fields: JokeUpdateFormInputValues) => void;
    onError?: (fields: JokeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JokeUpdateFormInputValues) => JokeUpdateFormInputValues;
    onValidate?: JokeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function JokeUpdateForm(props: JokeUpdateFormProps): React.ReactElement;
