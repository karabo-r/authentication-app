import React from "react";
import {
	Header as HeaderContainer,
	createStyles,
	Container,
	Image,
	Avatar,
	Group,
  Text,
} from "@mantine/core";
import logo from "../../assets/devchallenges.svg";
import profile from "../../assets/Google.svg";
const Header = () => {
	const HEADER_HEIGHT = 60;
	const useStyles = createStyles((theme) => ({
		header: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			height: "100%",
		},
	}));
	const { classes} = useStyles();
	return (
		<HeaderContainer height={HEADER_HEIGHT} mb={50}>
			<Container className={classes.header}>
				<Image width={"10rem"} height={40} fit="contain" src={logo} />
				<Group>
					<Avatar src={profile} alt="it's me" />
          <Text weight={500}>User Name</Text>
				</Group>
			</Container>
		</HeaderContainer>
	);
};

export default Header;
