import React from "react";
import {
	Paper,
	Text,
	Image,
	Button,
	TextInput,
	PasswordInput,
	Stack,
	Divider,
	Group,
	ActionIcon,
	Container,
} from "@mantine/core";
import logo from "../../assets/devchallenges.svg";
import google from "../../assets/Google.svg";
import twitter from "../../assets/Twitter.svg";
import github from "../../assets/Github.svg";
export const Card = () => {
	return (
		<Container size={"md"}>
			<Paper shadow="xs" p="xl" withBorder>
				<Image width={"10rem"} height={40} fit="contain" src={logo} />
				<Stack spacing="sm">
					<Text size="xl" weight={500}>
						Join thousands of learners <br /> from around world.
					</Text>
					<Text size="sm">
						Master web development by making real-life projects. <br />
						There are multiple paths for you to choose from.
					</Text>
					{/* </Stack> */}
					{/* // <Stack spacing="sm"> */}
					<TextInput required label="Email" placeholder="Email" size="md" />
					<PasswordInput
						required
						label="Password"
						placeholder="Password"
						size="md"
					/>
					<Button>Start coding now</Button>
					<Divider
						label="Or continue with this social profiles"
						labelPosition="center"
						my="lg"
					/>
					<Group position="center">
						<Group spacing="lg">
							{/* <Button variant="white"> */}
							<Button variant="default" radius={"xl"}>
								<ActionIcon size="sm">
									<img src={google} />
								</ActionIcon>
							</Button>
							<Button variant="default" radius={"xl"}>
								<ActionIcon size="sm">
									<img src={twitter} />
								</ActionIcon>
							</Button>
							<Button variant="default" radius={"xl"}>
								<ActionIcon size="sm">
									<img src={github} />
								</ActionIcon>
							</Button>
						</Group>
					</Group>
				</Stack>
			</Paper>
		</Container>
	);
};
