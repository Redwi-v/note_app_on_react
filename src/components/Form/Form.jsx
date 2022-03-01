import styles from './form.module.scss';

const Form = props => {
	const { sendNote, value, updateFormValue } = props;

	return (
		<form className={styles.form} onSubmit={sendNote}>
			<input
				className={styles.formInput}
				value={value}
				onChange={e => {
					updateFormValue(e.target.value);
				}}
				type='text'
				placeholder='Введите заметку'
			/>
		</form>
	);
};

export default Form;
