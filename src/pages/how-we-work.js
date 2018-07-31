import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const styles = (theme) => ({
	divider: {
		backgroundColor: '#d1d1d1',
		margin: '0 5%'
	}
});

function getSteps() {
	return [ 'Select campaign settings', 'Create an ad group', 'Create an ad' ];
}

class About extends React.Component {

	render() {
		const { classes } = this.props;
		const steps = getSteps();
		return (
			<div>
				<Stepper orientation="vertical">
					{steps.map((label, index) => {
						return (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>
			</div>
		);
	}
}

export default withStyles(styles)(About);
