import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
	container: {
		padding: '3%',
		minHeight: '350px',
		backgroundColor: '#f8f8f8'
	},
	quote: {
		...theme.typography.quote,
		color: '#4198ff',
		borderLeft: '7px solid #4198ff',
		margin: '25px auto',
		padding: '7px 0',
		maxWidth: '90%'
	},

	quoteMultiline: {
		backgroundColor: '#ffffff',
		display: 'inline',
		padding: '0.8rem',
		boxDecorationBreak: 'clone',
		WebkitBoxDecorationBreak: 'clone',
		'&:before': {
			content: 'open-quote'
		},
		'&:after': {
			content: 'close-quote'
		}
	},
	author: {
		...theme.typography.quote,
		color: '#4198ff',
		textAlign: 'right'
	},
	emdash: {
		padding: '10px'
	}
});

export default withStyles(styles)(({ classes, author, quote, authorRole, size }) => {
	return (
		<Grid container justify="center" alignItems="center" className={classes.container}>
			<Grid item xs={12} md={size || 5} lg={size || 5}>
				<Typography className={classes.quote}>
					<span className={classes.quoteMultiline}>
						{quote}
					</span>
				</Typography>
				<Typography className={classes.author}>
					<span className={classes.emdash} dangerouslySetInnerHTML={{ __html: "&#8212;" }} />
					{author}
				</Typography>
				<Typography className={classes.author}>
					{authorRole}
				</Typography>				
			</Grid>
		</Grid>
	);
});
