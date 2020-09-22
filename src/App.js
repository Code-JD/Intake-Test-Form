import React from 'react';
import { Formik } from "formik";
import { TextField } from "@material-ui/core";

const App: React.FC = () => {
	return <div>
		<Formik initialValues={{ firstName: 'bob' }} >
			{ () => (
			<form>
				<TextField />
			</form>
		)}</Formik>
	</div>;
};


export default App;
