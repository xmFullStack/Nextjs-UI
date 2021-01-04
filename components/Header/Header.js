import React from "react";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Search from "@material-ui/icons/Search";

import CustomInput from "components/CustomInput/CustomInput.js";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import styles from "assets/jss/nextjs-material-kit/components/headerStyle.js";

const useStyles = makeStyles(styles);

const useSearchBarStyles = makeStyles((theme) => ({
	root: {
		padding: "0px 4px",
		backgroundColor: "#EBEBEB",
		borderRadius: "0px 7px",
		display: "flex",
		alignItems: "center",
		width: "100%",
		height: 40,
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	divider: {
		height: 28,
		margin: 4,
	},
}));
const useSearchBarStylesInDrawer = makeStyles((theme) => ({
	root: {
		margin:'10px, 0px',
		padding: "0px 10px",
		backgroundColor: "#EBEBEB",
		borderRadius: "0px 7px",
		display: "flex",
		alignItems: "center",
		width: "100%",
		height: 40,
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	divider: {
		height: 28,
		margin: 4,
	},
	searchBar:{
		flex:1,
		padding: '0 15px',
		maxWidth: 400
	  },
}));

export default function Header(props) {
	const classes = useStyles();
	const classesSearch = useSearchBarStyles();
	const classesSearchInDrawer = useSearchBarStylesInDrawer();

	const [mobileOpen, setMobileOpen] = React.useState(false);
	React.useEffect(() => {
		if (props.changeColorOnScroll) {
			window.addEventListener("scroll", headerColorChange);
		}
		return function cleanup() {
			if (props.changeColorOnScroll) {
				window.removeEventListener("scroll", headerColorChange);
			}
		};
	});
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const headerColorChange = () => {
		const { color, changeColorOnScroll } = props;
		const windowsScrollTop = window.pageYOffset;
		if (windowsScrollTop > changeColorOnScroll.height) {
			document.body
				.getElementsByTagName("header")[0]
				.classList.remove(classes[color]);
			document.body
				.getElementsByTagName("header")[0]
				.classList.add(classes[changeColorOnScroll.color]);
		} else {
			document.body
				.getElementsByTagName("header")[0]
				.classList.add(classes[color]);
			document.body
				.getElementsByTagName("header")[0]
				.classList.remove(classes[changeColorOnScroll.color]);
		}
	};
	const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
	const appBarClasses = classNames({
		[classes.appBar]: true,
		[classes[color]]: color,
		[classes.absolute]: absolute,
		[classes.fixed]: fixed,
	});
	const brandComponent = (
		<Link href="/login" as="/login">
			<Button className={classes.title}>{brand}</Button>
		</Link>
	);
	return (
		<AppBar className={appBarClasses}>
			<Toolbar className={classes.container}>
				{leftLinks !== undefined ? brandComponent : null}
				{/* <div className={classes.flex}> */}
				{leftLinks !== undefined ? (
					<Hidden smDown implementation="css">
						{leftLinks}
					</Hidden>
				) : (
					brandComponent
				)}
				{/* </div> */}
				<div className={classes.searchBar}>
					<Hidden smDown implementation="css">
						<div className={classes.flex}>
							<div className={classesSearch.root}>
								<IconButton
									className={classesSearch.iconButton}
									aria-label="menu"
								>
									{/* <MenuIcon /> */}
									<p style={{ paddingTop: "10px" }}>SEARCH</p>
								</IconButton>
								<Divider
									className={classesSearch.divider}
									orientation="vertical"
								/>
								<InputBase
									className={classesSearch.input}
									placeholder="by topic, format, language, motion "
									inputProps={{
										"aria-label": "by topic, format, language, motion ",
									}}
								/>
								<IconButton
									type="submit"
									className={classesSearch.iconButton}
									aria-label="search"
									size="medium"
								>
									<SearchIcon />
								</IconButton>
							</div>
						</div>
					</Hidden>
				</div>

				<Hidden smDown implementation="css">
					{rightLinks}
				</Hidden>

				<Hidden mdUp>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerToggle}
						size="medium"
					>
						<Menu fontSizeLarge/>
					</IconButton>
				</Hidden>
			</Toolbar>
			<Hidden mdUp implementation="js">
				<Drawer
					variant="temporary"
					anchor={"right"}
					open={mobileOpen}
					classes={{
						paper: classes.drawerPaper,
					}}
					onClose={handleDrawerToggle}
				>
					<div className={classes.appResponsive}>
						{leftLinks}
						{rightLinks}
						<div className={classesSearchInDrawer.searchBar}>
							<div className={classes.flex}>
								<div className={classesSearchInDrawer.root}>
									{/* <IconButton
										className={classesSearchInDrawer.iconButton}
										aria-label="menu"
									> */}
										{/* <MenuIcon /> */}
										<p style={{ paddingTop: "10px" }}>SEARCH</p>
									{/* </IconButton> */}
									<Divider
										className={classesSearchInDrawer.divider}
										orientation="vertical"
									/>
									<InputBase
										className={classesSearchInDrawer.input}
										placeholder="by topic, format, language, motion "
										inputProps={{
											"aria-label": "by topic, format, language, motion ",
										}}
									/>
									<IconButton
										type="submit"
										className={classesSearchInDrawer.iconButton}
										aria-label="search"
										
									>
										<SearchIcon />
									</IconButton>
								</div>
							</div>
						</div>
					</div>
				</Drawer>
			</Hidden>
		</AppBar>
	);
}

Header.defaultProp = {
	color: "white",
};

Header.propTypes = {
	color: PropTypes.oneOf([
		"primary",
		"info",
		"success",
		"warning",
		"danger",
		"transparent",
		"white",
		"rose",
		"dark",
	]),
	rightLinks: PropTypes.node,
	leftLinks: PropTypes.node,
	brand: PropTypes.string,
	fixed: PropTypes.bool,
	absolute: PropTypes.bool,
	// this will cause the sidebar to change the color from
	// props.color (see above) to changeColorOnScroll.color
	// when the window.pageYOffset is heigher or equal to
	// changeColorOnScroll.height and then when it is smaller than
	// changeColorOnScroll.height change it back to
	// props.color (see above)
	changeColorOnScroll: PropTypes.shape({
		height: PropTypes.number.isRequired,
		color: PropTypes.oneOf([
			"primary",
			"info",
			"success",
			"warning",
			"danger",
			"transparent",
			"white",
			"rose",
			"dark",
		]).isRequired,
	}),
};
