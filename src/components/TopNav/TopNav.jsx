import "./TopNav.scss";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link, Box, Stack } from "@mui/material";

export default function TopNav() {
  return (
    <Box className="top-nav">
      <Stack direction={"row"} spacing={2} padding={1}>
        <Link
          href="mailto:chicongnguyen.dev@gmail.com"
          underline="none"
          color={"white"}
          className="info__link"
        >
          <EmailIcon fontSize={"small"} />
          <p>chicongnguyen.dev@gmail.com</p>
        </Link>

        <Link
          href="tel:0868936515"
          underline="none"
          color={"white"}
          className="info__link"
        >
          <PhoneIcon fontSize={"small"} />
          <p>0868936515</p>
        </Link>
      </Stack>

      <Stack direction={"row"} spacing={2} padding={1}>
        <Link
          href="https://www.facebook.com/oc.voi.voii/"
          underline="none"
          color={"white"}
          target="_blank"
        >
          <FacebookIcon fontSize={"small"} />
        </Link>
        <Link
          href="https://github.com/whis102/SkyEdge"
          underline="none"
          color={"white"}
          target="_blank"
        >
          <GitHubIcon fontSize={"small"} />
        </Link>
        <Link
          href="https://www.youtube.com/@zWhis155"
          underline="none"
          color={"white"}
          target="_blank"
        >
          <YouTubeIcon fontSize={"small"} />
        </Link>

        <Link
          href="https://www.linkedin.com/in/ocvoivoii/"
          underline="none"
          color={"white"}
          target="_blank"
        >
          <LinkedInIcon fontSize={"small"} />
        </Link>
      </Stack>
    </Box>
  );
}
