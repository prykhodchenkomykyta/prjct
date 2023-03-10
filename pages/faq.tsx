import { Box, useTheme, Typography } from "@mui/material";
import Header from "@/components/global/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "@/ui/theme";
import Sidebar from "@/components/global/Sidebar";
import Head from "next/head";

const FAQ = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<>
			<Head>
				<title>FAQ Page</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					rel="icon"
					href="https://static.wixstatic.com/media/64dc93_be5187a1a93a49f0ac3d7be435bb3372~mv2.png/v1/fill/w_93,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/prlogo2.png"
				/>
			</Head>
					<Box m="20px">
						<Header title="FAQ" subtitle="Frequently Asked Questions Page" />

						<Accordion defaultExpanded>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<Typography color={colors.greenAccent[500]} variant="h5">
									An Important question
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Rerum, impedit.
								</Typography>
							</AccordionDetails>
						</Accordion>

						<Accordion defaultExpanded>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<Typography color={colors.greenAccent[500]} variant="h5">
									Another question
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Rerum, impedit.
								</Typography>
							</AccordionDetails>
						</Accordion>

						<Accordion defaultExpanded>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<Typography color={colors.greenAccent[500]} variant="h5">
									Your favorite question
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Rerum, impedit.
								</Typography>
							</AccordionDetails>
						</Accordion>

						<Accordion defaultExpanded>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<Typography color={colors.greenAccent[500]} variant="h5">
									Some random question
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Rerum, impedit.
								</Typography>
							</AccordionDetails>
						</Accordion>

						<Accordion defaultExpanded>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<Typography color={colors.greenAccent[500]} variant="h5">
									The final question
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Rerum, impedit.
								</Typography>
							</AccordionDetails>
						</Accordion>
					</Box>
		</>
	);
};

export default FAQ;
