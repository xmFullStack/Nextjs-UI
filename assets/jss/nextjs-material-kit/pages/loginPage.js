import { container } from "assets/jss/nextjs-material-kit.js";

const signupPageStyle = {
	container: {
		...container,
		zIndex: "2",
		position: "relative",
		backgroundColor: "white",
		// paddingTop: "100px",
		padding: "100px 60px 60px 60px",
		// color: "#FFFFFF",
	},
	cardHidden: {
		opacity: "0",
		transform: "translate3d(0, -60px, 0)",
	},
	pageHeader: {
		height: "auto",
		display: "inherit",
		position: "relative",
		margin: "0",
		padding: "0 60px",
		border: "0",
		alignItems: "center",
		"&:before": {
			background: "rgba(255, 255, 255, 1)",
		},
		"&:before,&:after": {
			position: "absolute",
			zIndex: "1",
			width: "100%",
			height: "100%",
			display: "block",
			left: "0",
			top: "0",
			content: '""',
		},
		"& footer li a,& footer li a:hover,& footer li a:active": {
			color: "#FFFFFF",
		},
		"& footer": {
			position: "absolute",
			bottom: "0",
			width: "100%",
		},
	},
	form: {
		margin: "0",
	},
	cardHeader: {
		width: "auto",
		textAlign: "center",
		marginLeft: "20px",
		marginRight: "20px",
		marginTop: "-40px",
		padding: "20px 0",
		marginBottom: "15px",
	},
	socialIcons: {
		maxWidth: "24px",
		marginTop: "0",
		width: "100%",
		transform: "none",
		left: "0",
		top: "0",
		height: "100%",
		lineHeight: "41px",
		fontSize: "20px",
	},
	divider: {
		marginTop: "30px",
		marginBottom: "0px",
		textAlign: "center",
	},
	cardFooter: {
		paddingTop: "0rem",
		border: "0",
		borderRadius: "6px",
		justifyContent: "center !important",
	},
	socialLine: {
		marginTop: "1rem",
		textAlign: "center",
		padding: "0",
	},
	inputIconsColor: {
		color: "#495057",
  },
  
  socialButton:{
    border: "1px #999 solid",
    // height: "55px",
    margin: "10px 0",
    "@media(min-width: 576px)": {
			height: "3rem",
		},
		"@media (min-width: 768px)": {
			height: "2.2rem",
		},
		"@media (min-width: 992px)": {
			height: "2.5rem",
		},
		"@media (min-width: 1200px)": {
			height: "3rem",
		},
		"@media (min-width: 1920px)": {
			height: "3.3rem",
		},
  },

	toggleButton: {
		height: "3.3rem",
		margin: "5px 0",
		fontWeight: "bold",
		border: "#999 1px solid",
		padding: "15px, 0px",
		fontFamily: "Lato, sans-serif",

		"@media(min-width: 576px)": {
			height: "3rem",
		},
		"@media (min-width: 768px)": {
			height: "2.2rem",
		},
		"@media (min-width: 992px)": {
			height: "2.5rem",
		},
		"@media (min-width: 1200px)": {
			height: "3rem",
		},
		"@media (min-width: 1920px)": {
			height: "3.3rem",
		},
	},

	toggleButtonTitle: {
		"@media(min-width: 576px)": {
			fontSize: "20px",
		},
		"@media (min-width: 768px)": {
			fontSize: "16px",
		},
		"@media (min-width: 992px)": {
			fontSize: "18px",
		},
		"@media (min-width: 1200px)": {
			fontSize: "18px",
		},
		"@media (min-width: 1920px)": {
			fontSize: "20px",
		},
	},
	
  socialIcon:{
    "@media(min-width: 576px)": {
			height: "20px",
		},
		"@media (min-width: 768px)": {
			height: "17px",
		},
		"@media (min-width: 992px)": {
			height: "20px",
		},
		"@media (min-width: 1200px)": {
			height: "25px",
		},
		"@media (min-width: 1920px)": {
			height: "30px",
		},
  },
  socialIconInButton: {
		flex: 1,
		textAlign: "right",
		marginRight: "10px",

		// width:'25%',
		verticalAlign: "middle",
		marginTop: "5px",
		
  },
  socialButtonTitle: {
		flex: 2.5,
		paddingTop: "7px",
		// fontSize: "1.5em",
		// width:'75%',
		fontFamily: '"Lato", sans-serif',
		textAlign: "left",
		"@media(min-width: 576px)": {
      fontSize: "1.3em",
      flex: 1.5,
		},
		"@media (min-width: 768px)": {
      fontSize: "1em",
      flex: 2,
		},
		"@media (min-width: 992px)": {
      fontSize: "1.em",
      flex: 2.5,
		},
		"@media (min-width: 1200px)": {
      fontSize: "1.2em",
      flex: 2.5,
		},
		"@media (min-width: 1920px)": {
      fontSize: "1.5em",
      flex: 2.5,
		},
  },
  logoImage:{
    marginLeft: 20,
    height:'20px',
    "@media(min-width: 576px)": {
      height:'20px',
      marginLeft: 20,
		},
		"@media (min-width: 768px)": {
      height:'26px',
      marginLeft: 20,
		},
		"@media (min-width: 992px)": {
      height:'26px',
      marginLeft: 0,
		},
		"@media (min-width: 1200px)": {
      height:'26px',
      marginLeft: 0,
		},
		"@media (min-width: 1920px)": {
      height:'26px',
      marginLeft: 0,
		},
  }

};

export default signupPageStyle;
