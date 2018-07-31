import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import Link, { withPrefix } from 'gatsby-link';
import classNames from 'classnames';

import Button from './Button';

const styles = (theme) => ({
	root: {
		backgroundColor: '#333333',
		flexGrow: 1,
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing.unit * 2
		},
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing.unit * 7
		},
		[theme.breakpoints.up('lg')]: {
			padding: theme.spacing.unit * 10
		},
		color: '#ffffff'
	},
	row: {
		width: '100%'
	},
	right: {
		textAlign: 'right'
	},
	logo: {
		width: '99px',
		height: '20px',
		objectFit: 'contain'
	},
	client: {
		fontSize: '16px',
		fontWeight: '500'
	},
	divider: {
		marginTop: '1.5%',
		marginBottom: '1.5%',
		backgroundColor: '#666666'
	},
	heading: {
		fontSize: '16px',
		fontWeight: '900',
		color: '#ffffff'
	},
	paragraph: {
		fontSize: '12px',
		fontWeight: '500',
		color: '#ffffff'
	},
	space: {
		marginTop: '10%'
	},
	linkedin: {
		width: '20px',
		height: '20px',
		backgroundColor: 'white',
		borderRadius: '2px'
	},
	spaceNormal: {
		marginTop: '5%'
	},
	input: {
		width: '100%',
		height: '35px',
		borderRadius: '4px',
		backgroundColor: '#ffffff',
		marginTop: '3%'
	},
	textBox: {
		width: '100%',
		height: '99px',
		borderRadius: '4px',
		backgroundColor: '#ffffff',
		border: 'solid 1px #979797',
		marginTop: '3%'
	},
	button: {
		cursor: 'pointer',
		marginBottom: '5%',
		width: '100%',
		height: '41px',
		borderRadius: '19.5px',
		background: `linear-gradient(to right, #4B96FC, #6F77FB)`
	},
	buttonText: {
		paddingTop: '10px',
		height: '19px',
		fontSize: '14px',
		fontWeight: '500',
		fontStyle: 'normal',
		fontStretch: 'normal',
		lineHeight: 'normal',
		letterSpacing: 'normal',
		textAlign: 'center',
		color: '#ffffff'
	},
	margin: {
		marginTop: '15px'
	},
	link: {
		textDecoration: 'none',
		color: 'inherit',
		'&:hover': {
			textDecoration: 'none',
			color: 'inherit'
		}
	}
});

const Footer = ({ classes }) => {
	return (
		<div className={classes.root}>
			<Grid className={classes.row} container>
				<Grid item xs={6} md={6}>
					<Link className={classes.link} to="/">
						<Typography variant="subheading" className={classes.client} color="inherit" gutterBottom={true}>
							HUMANOKO
						</Typography>
					</Link>
				</Grid>
				<Grid item xs={6} md={6} className={classes.right}>
					<Link className={classes.link} to="/">
						<Typography variant="subheading" className={classes.client} color="inherit" gutterBottom={true}>
							Client Login
						</Typography>
					</Link>
				</Grid>
			</Grid>

			<Divider className={classes.divider} />

			<Grid justify="space-between" className={classes.row} container>
				{/*Second Column For Mobile Start*/}
				<Hidden smUp>
					<Grid item xs={12} md={3}>
						{/*First Row*/}
						<Grid container>
							<Grid item xs={6} md={6}>
								<Typography
									variant="subheading"
									className={classes.client}
									color="inherit"
									gutterBottom={true}
								>
									Let’s talk
								</Typography>
							</Grid>
							<Grid item xs={6} md={6} className={classes.right}>
								<Link className={classes.link} to="/">
									<img
										className={classes.linkedin}
										src={withPrefix('/img/linkedin.png')}
										alt="humanoko"
									/>
								</Link>
							</Grid>
						</Grid>
						{/*Second Row*/}
						<form action="#" method="post">
							<div>
								<Grid item xs={12}>
									<Typography
										variant="subheading"
										className={classNames(classes.paragraph, classes.spaceNormal)}
										color="inherit"
										gutterBottom={true}
									>
										Email address
									</Typography>
								</Grid>
								<input className={classes.input} name="name" type="text" id="name" />
							</div>
							<div>
								<Grid item xs={12}>
									<Typography
										variant="subheading"
										className={classNames(classes.paragraph, classes.spaceNormal)}
										color="inherit"
										gutterBottom={true}
									>
										Message
									</Typography>
								</Grid>
								<textarea className={classes.textBox} name="message" type="text" id="message" />
							</div>
							<div className={classNames(classes.button, classes.space)}>
								<p className={classes.buttonText}>Send Message</p>
							</div>
						</form>
					</Grid>
				</Hidden>
				{/*Second Column For Mobile End*/}

				{/*First Column Start*/}
				<Grid item xs={12} md={6}>
					{/*First Row*/}
					<Grid container>
						<Grid item xs={6} md={6}>
							<Grid direction="column" className={classes.row} container>
								<Grid item xs={12}>
									<Link className={classes.link} to="/about">
										<Typography
											variant="headline"
											className={classes.heading}
											color="inherit"
											gutterBottom={true}
										>
											About Humanoko
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/about">
										<Typography
											variant="subheading"
											className={classNames(classes.paragraph, classes.margin)}
											color="inherit"
											gutterBottom={true}
										>
											Overview
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/about/#team">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom={true}
										>
											Team
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/about/#career">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom={true}
										>
											Careers
										</Typography>
									</Link>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={6} md={6}>
							<Grid direction="column" className={classes.row} container>
								<Grid item xs={12}>
									<Typography
										variant="headline"
										className={classes.heading}
										color="inherit"
										gutterBottom={true}
									>
										Results
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/">
										<Typography
											variant="subheading"
											className={classNames(classes.paragraph, classes.margin)}
											color="inherit"
											gutterBottom={true}
										>
											Clients &amp; Testimonials
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom={true}
										>
											Select Case Studies
										</Typography>
									</Link>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					{/*Second Row*/}
					<Grid container className={classes.space}>
						<Grid item xs={6} md={6}>
							<Grid direction="column" className={classes.row} container>
								<Grid item xs={12}>
									<Typography
										variant="headline"
										className={classes.heading}
										color="inherit"
										gutterBottom={true}
									>
										Services
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/services">
										<Typography
											variant="subheading"
											className={classNames(classes.paragraph, classes.margin)}
											color="inherit"
											gutterBottom={true}
										>
											Overview
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/services/mobile">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom={true}
										>
											Mobile
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/services/web">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom={true}
										>
											Web
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/services/devops">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom={true}
										>
											DevOps
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/services/recruitment-staffing">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom={true}
										>
											Recruitment & Staffing
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/services/salesforce">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom={true}
										>
											Salesforce
										</Typography>
									</Link>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={6} md={6}>
							<Grid direction="column" className={classes.row} container>
								<Grid item xs={12}>
									<Typography
										variant="headline"
										className={classes.heading}
										color="inherit"
										gutterBottom={true}
									>
										The Humanoko Difference
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/the-humanoko-difference">
										<Typography
											variant="subheading"
											className={classNames(classes.paragraph, classes.margin)}
											color="inherit"
											gutterBottom={true}
										>
											Overview
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/the-humanoko-difference/process">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom={true}
										>
											Process
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/the-humanoko-difference/manifesto">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom={true}
										>
											Manifesto
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/services/pricing">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom={true}
										>
											Pricing
										</Typography>
									</Link>
								</Grid>
								<Grid item xs={12}>
									<Link className={classes.link} to="/the-humanoko-difference/faqs">
										<Typography
											variant="subheading"
											className={classes.paragraph}
											color="inherit"
											gutterBottom={true}
										>
											FAQs
										</Typography>
									</Link>
								</Grid>
							</Grid>
						</Grid>
					</Grid>

					{/*Third Row*/}
					<Grid container className={classes.space}>
						<Typography
							variant="subheading"
							className={classes.paragraph}
							color="inherit"
							gutterBottom={true}
						>
							Copyright © 2018 Humanoko Inc and respective clients. All rights reserved.
						</Typography>
					</Grid>
				</Grid>
				{/*First Column End*/}

				{/*Second Column For Desktop* Start*/}
				<Hidden xsDown>
					<Grid item xs={12} md={3}>
						{/*First Row*/}
						<Grid container>
							<Grid item xs={6} md={6}>
								<Typography
									variant="subheading"
									className={classes.client}
									color="inherit"
									gutterBottom={true}
								>
									Let’s talk
								</Typography>
							</Grid>
							<Grid item xs={6} md={6} className={classes.right}>
								<Link className={classes.link} to="/">
									<img
										className={classes.linkedin}
										src={withPrefix('/img/linkedin.png')}
										alt="humanoko"
									/>
								</Link>
							</Grid>
						</Grid>
						{/*Second Row*/}
						<form action="#" method="post">
							<div>
								<Grid item xs={12}>
									<Typography
										variant="subheading"
										className={classNames(classes.paragraph, classes.spaceNormal)}
										color="inherit"
										gutterBottom={true}
									>
										Email address
									</Typography>
								</Grid>
								<input className={classes.input} name="name" type="text" id="name" />
							</div>
							<div>
								<Grid item xs={12}>
									<Typography
										variant="subheading"
										className={classNames(classes.paragraph, classes.spaceNormal)}
										color="inherit"
										gutterBottom={true}
									>
										Message
									</Typography>
								</Grid>
								<textarea className={classes.textBox} name="message" type="text" id="message" />
							</div>
							<Button text="Send Message" />
						</form>
					</Grid>
				</Hidden>
				{/*Second Column For Desktop End*/}
			</Grid>
		</div>
	);
};

export default withStyles(styles)(Footer);
