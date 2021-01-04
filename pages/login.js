import React from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import styles from "assets/jss/nextjs-material-kit/pages/loginPage.js";
import NativeSelect from "@material-ui/core/NativeSelect";
import Select from "@material-ui/core/Select";
import image from "assets/img/bg7.jpg";
import InputLabel from "@material-ui/core/InputLabel";
import brand from "assets/img/icons/brand.png";
import mailIcon from "assets/img/icons/mail.png";
import fbIcon from "assets/img/icons/fb_icon.png";
import googleIcon from "assets/img/icons/google_icon.png";
import zoomBrand from "assets/img/icons/zoom_text.png";
import loginImg from "assets/img/icons/login_img.png";

const useStyles = makeStyles({
	margin: {
		margin: "0px 0px",
	},

	...styles,
});

import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
	root: {
		"label + &": {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		borderRadius: 4,
		position: "relative",
		backgroundColor: theme.palette.background.paper,
		border: "1px solid #ced4da",
		fontSize: 16,
		padding: "10px 26px 10px 12px",
		transition: theme.transitions.create(["border-color", "box-shadow"]),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		"&:focus": {
			borderRadius: 4,
			borderColor: "#80bdff",
			boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
		},
	},
}))(InputBase);

export function SocialButton({ icon, title }) {
	const classes = useStyles();

	return (
		<Button
			fullWidth
			className={classes.socialButton}			
		>
			<div
				style={{
					width: "100%",
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<div className={classes.socialIconInButton}>{icon}</div>
				<div className={classes.socialButtonTitle}>{title}</div>
			</div>
		
		</Button>
	);
}

export function CustomSelect({
	id,
	value,
	onChange,
	data,
	noneString,
	noneVal,
}) {
	const classes = useStyles();

	return (
		<FormControl variant="outlined" className={classes.margin}>
			{/* <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel> */}
			<NativeSelect
				id={id}
				value={value}
				onChange={(event) => {
					if (onChange) {
						onChange(event.target.value);
					}
				}}
				input={<BootstrapInput />}
			>
				<option aria-label="None" value={noneVal}>
					{noneString}
				</option>
				{data.map((one) => (
					<option key={"" + one} value={one}>
						{one}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
}

export function ToggleButton({ title, selected, onClick }) {
	const classes = useStyles();

	let style = {};
	if (selected) {
		style = {
			backgroundColor: "#35328c",
			color: "white",
		};
	}

	return (
		<Button
			fullWidth
			className={classes.toggleButton}
			style={{
				...style,
			}}
			onClick={() => {
				if (onClick) {
					onClick();
				}
			}}
		>
			<div className={classes.toggleButtonTitle}>{title}</div>
		</Button>
	);
}

export default function LoginPage(props) {
	const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
	setTimeout(function () {
		setCardAnimation("");
	}, 700);
	const classes = useStyles();
	const { ...rest } = props;

	const [joinOption, setJoinOption] = React.useState(0);

	const [dobY, setDobY] = React.useState("");
	const [dobM, setDobM] = React.useState("");
	const [dobD, setDobD] = React.useState("");

	const handleChangeYear = (event) => {
		setDobY(event.target.value);
	};

	const handleChangeMonth = (event) => {
		setDobM(event.target.value);
	};

	const handleChangeDay = (event) => {
		setDobD(event.target.value);
	};

	const curYear = new Date().getFullYear();
	let yearList = [];
	for (let i = curYear - 10; i > curYear - 100; i--) {
		yearList.push(i);
	}
	let monthList = [];
	for (let i = 1; i <= 12; i++) {
		monthList.push(i);
	}
	let dayList = [];
	for (let i = 1; i <= 31; i++) {
		dayList.push(i);
	}

	return (
		<div>
			<Header
				absolute
				color="white"
				brand={
					<img src={brand} className={classes.logoImage} />
				}
				rightLinks={<HeaderLinks />}
				{...rest}
			/>
			<div
				className={classes.pageHeader}
				style={{
					backgroundColor: "white",
					// backgroundImage: "url(" + image + ")",
					backgroundSize: "cover",
					backgroundPosition: "top center",
				}}
			></div>
			<div id="divContainer" className={classes.container}>
				<GridContainer justify={"center"}>
					<GridItem xs={12} sm={12} md={7} lg={8}>
						<div>
							<h2
								style={{
									fontSize: "32px",
									fontWeight: 600,
								}}
							>
								Debate with anyone, anywhere. <i>For free.</i>
							</h2>
						</div>

						<div style={{ fontSize: 22, marginBottom: 15 }}>
							Build your debating skills by engaging in structured and
							<br />
							customizable debate formats.
						</div>
						<img src={loginImg} style={{ width: "90%" }} />
					</GridItem>

					<GridItem xs={12} sm={12} md={5} lg={4}>
						<form className={classes.form}>
							<div
								style={{
									marginTop: 100,
									marginBottom: "10px",
									fontSize: "21px",
									fontWeight: "bold",
								}}
							>
								Join DebateNow as a
							</div>
							<GridContainer justify="space-between">
								<GridItem xs={12} sm={4} md={4}>
									<ToggleButton
										title="Debater"
										selected={joinOption == 0}
										onClick={() => {
											setJoinOption(0);
										}}
									/>
								</GridItem>
								<GridItem xs={12} sm={4} md={4}>
									<ToggleButton
										title="Parent"
										selected={joinOption == 1}
										onClick={() => {
											setJoinOption(1);
										}}
									/>
								</GridItem>
								<GridItem xs={12} sm={4} md={4}>
									<ToggleButton
										title="Teacher"
										selected={joinOption == 2}
										onClick={() => {
											setJoinOption(2);
										}}
									/>
								</GridItem>
							</GridContainer>

							<div
								style={{
									fontWeight: "bold",
									marginBottom: "10px",
									fontSize: "21px",
									marginTop: "50px",
								}}
							>
								What is your date of birth?
							</div>

							<GridContainer justify="space-between">
								<GridItem xs={4} sm={4} md={4}>
									<FormControl className={classes.margin} fullWidth>
										<CustomSelect
											id="month"
											name="ageMonth"
											onChange={(val) => {}}
											data={monthList}
											noneString="Month"
											noneVal={null}
										/>
									</FormControl>
								</GridItem>
								<GridItem xs={4} sm={4} md={4} style={{ padding: "0 5px" }}>
									<FormControl className={classes.margin} fullWidth>
										<CustomSelect
											id="day"
											name="ageDay"
											onChange={(val) => {}}
											data={dayList}
											noneString="Day"
											noneVal={null}
										/>
									</FormControl>
								</GridItem>

								<GridItem xs={4} sm={4} md={4}>
									<FormControl className={classes.margin} fullWidth>
										<CustomSelect
											id="year"
											name="ageYear"
											onChange={(val) => {}}
											data={yearList}
											noneString="Year"
											noneVal={null}
										/>
									</FormControl>
								</GridItem>
							</GridContainer>

							<GridContainer align="center" style={{ marginTop: 40 }}>
								<GridItem md={12}>
									<SocialButton
										icon={
											<img
												src={zoomBrand}
												className={classes.socialIcon}
											/>
										}
										title={"Continue with Zoom"}
									/>
								</GridItem>
								<GridItem md={12}>
									<SocialButton
										icon={
											<img
												src={googleIcon}
												className={classes.socialIcon}
											/>
										}
										title={"Continue with Google"}
									/>
								</GridItem>
								<GridItem md={12}>
									<SocialButton
										icon={
											<img
												src={fbIcon}
												className = {classes.socialIcon}												
											/>
										}
										title={
											<div style={{ paddingLeft: "5px" }}>
												Continue with Facebook
											</div>
										}
									/>
								</GridItem>
								<GridItem md={12}>
									<SocialButton
										icon={
											<img
												src={mailIcon}
												className={classes.socialIcon}
											/>
										}
										title={"Continue with Email"}
									/>
								</GridItem>
							</GridContainer>
						</form>
					</GridItem>
				</GridContainer>
			</div>

			<Footer whiteFont></Footer>
		</div>
	);
}
