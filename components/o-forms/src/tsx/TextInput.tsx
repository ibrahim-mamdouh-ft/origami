import uniqueId from "lodash.uniqueid";
import { classBuilder } from "../utils/classBuilder";
import { FormError, InputProps, FormField, FormFieldProps } from "./Form";

export type TextInputType = 'text' | 'password' | 'email' | 'textarea';

export interface TextInputProps extends InputProps, FormField{
	highlight?: 'valid' | 'invalid';
	errorMessage?: string;
	hasSuffix?: boolean;
	type?: TextInputType;
	isSmall?: boolean;
	children?: JSX.Element;
	onChange?: Function;
	ref?: any; /* Look up correct type */
	/* currently inherts children wrongly and id unnessaserily  */
}

export function TextInput({
	title,
	description,
	isOptional,
	isInline,
	isVerticalCenter,
	value,
	type,
	name,
	onChange,
	ref,
	highlight,
	errorMessage,
	isSmall,
	required,
	disabled,
	hasSuffix,
	children
}: TextInputProps) {
	const id = uniqueId('labelledby_');
	const InputComponent = type !== 'textarea' ? 'input' : 'textarea';
	const [addClass, getClasses] = classBuilder('o-forms-input');
	const inputType = (!type || type === 'email') ? 'text' : type;
	addClass(inputType);
	if(highlight) addClass(highlight);
	if(errorMessage) addClass('invalid'); /*  */
	if(isSmall) addClass('small')
	if((hasSuffix || children) && hasSuffix !== false) addClass('suffix')

	return(
		<FormField id={id} title={title} description={description} isOptional={isOptional} isInline={isInline} isVerticalCenter={isVerticalCenter}>
			<span className={getClasses()}>
				<InputComponent id={id} type={type} name={name} value={value} onChange={onChange ? event => onChange(event) : null } ref={ref} required={required} disabled={disabled}/>
				{children}
				{errorMessage && <FormError errorMessage={errorMessage}/>}
			</span>
		</FormField>
	)
}

/* export function PureTextInput({id, value, type, name, onChange, ref, highlight, errorMessage, isSmall, required, disabled, hasSuffix, children}: TextInputProps) {
	const InputComponent = type !== 'textarea' ? 'input' : 'textarea';
	const modifiers = [];
	const inputType = (!type || type === 'email') ? 'text' : type;
	modifiers.push(`o-forms-input--${inputType}`);
	if(highlight) modifiers.push(`o-forms-input--${highlight}`);
	if(errorMessage) modifiers.push(`o-forms-input--${highlight}`);
	if(isSmall) modifiers.push('o-forms-input--small')
	if((hasSuffix || children) && hasSuffix !== false) modifiers.push('o-forms-input--suffix')
	return(
		<span className={`o-forms-input ${modifiers.join(' ')}`}>
			<InputComponent id={id} type={type} name={name} value={value} onChange={onChange ? event => onChange(event) : null } ref={ref} required={required} disabled={disabled}/>
			{children}
			{errorMessage && <FormError errorMessage={errorMessage}/>}
		</span>
	)
} */
