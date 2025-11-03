import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function BasicAccordion() {
  const [isFaqButton1Clicked, setIsFaqButton1Clicked] = useState(false);
  const [isFaqButton2Clicked, setIsFaqButton2Clicked] = useState(false);
  const [isFaqButton3Clicked, setIsFaqButton3Clicked] = useState(false);
  const [isFaqButton4Clicked, setIsFaqButton4Clicked] = useState(false);
  const [isFaqButton5Clicked, setIsFaqButton5Clicked] = useState(false);

  const clickHandler1 = () => {
    setIsFaqButton1Clicked(!isFaqButton1Clicked);
  };
  const clickHandler2 = () => {
    setIsFaqButton2Clicked(!isFaqButton2Clicked);
  };
  const clickHandler3 = () => {
    setIsFaqButton3Clicked(!isFaqButton3Clicked);
  };
  const clickHandler4 = () => {
    setIsFaqButton4Clicked(!isFaqButton4Clicked);
  };
  const clickHandler5 = () => {
    setIsFaqButton5Clicked(!isFaqButton5Clicked);
  };

  return (
    <div className="faq">
      <div className="faq-title-cont">
        <h3>FAQ</h3>
        <img src="hr.svg" alt="" />
        <p>
          Frequently asked questions about our Rental Management System — how listings,
          payments, verification and tenant-landlord interactions work on the platform.
        </p>
      </div>

      <div className="accordion-cont">
        <Accordion
          sx={{
            "& .MuiAccordionDetails-root": {
              padding: "0 30px",
            },
            "& .MuiButtonBase-root": {
              paddingLeft: "30px",
              backgroundColor: isFaqButton1Clicked ? "#222a2f" : "initial",
              color: isFaqButton1Clicked ? "white" : "initial",
            },
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: isFaqButton1Clicked ? "white" : "initial",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={clickHandler1}
          >
            <h5>1. What property types can I list or search for?</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Our platform supports Apartments, Condominiums and Private Houses — with
              fields for bedrooms, bathrooms, area, location, and photos. You can also
              filter by price, availability date and amenities to find the right match.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            "& .MuiAccordionDetails-root": {
              padding: "0 30px",
            },
            "& .MuiButtonBase-root": {
              paddingLeft: "30px",
              backgroundColor: isFaqButton2Clicked ? "#222a2f" : "initial",
              color: isFaqButton2Clicked ? "white" : "initial",
            },
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: isFaqButton2Clicked ? "white" : "initial",
            },
          }}
        >
          <AccordionSummary
            onClick={clickHandler2}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h5>2. How does the pay-per-post model work for landlords?</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Landlords pay a single posting fee to publish a listing (no subscription).
              Once payment is confirmed the listing goes live. This reduces ongoing
              advertising costs and improves affordability for small property owners.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            "& .MuiAccordionDetails-root": {
              padding: "0 30px",
            },
            "& .MuiButtonBase-root": {
              paddingLeft: "30px",
              backgroundColor: isFaqButton3Clicked ? "#222a2f" : "initial",
              color: isFaqButton3Clicked ? "white" : "initial",
            },
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: isFaqButton3Clicked ? "white" : "initial",
            },
          }}
        >
          <AccordionSummary
            onClick={clickHandler3}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h5>3. Are listings verified and how do you prevent scams?</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              We review listings before publishing and require key details (ID, photos,
              contact info). Users can report suspicious listings; admins review reports
              and remove fraudulent content. Verification reduces misrepresentation risks.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            "& .MuiAccordionDetails-root": {
              padding: "0 30px",
            },
            "& .MuiButtonBase-root": {
              paddingLeft: "30px",
              backgroundColor: isFaqButton4Clicked ? "#222a2f" : "initial",
              color: isFaqButton4Clicked ? "white" : "initial",
            },
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: isFaqButton4Clicked ? "white" : "initial",
            },
          }}
        >
          <AccordionSummary
            onClick={clickHandler4}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h5>4. What payment methods are supported for posting fees?</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              We integrate local-friendly payment options (mobile money and local gateways)
              for posting fees. Rent payments themselves are handled outside the platform
              in the current version (cash or bank transfer), with plans to add full rent
              payment integration later.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            "& .MuiAccordionDetails-root": {
              padding: "0 30px",
            },
            "& .MuiButtonBase-root": {
              paddingLeft: "30px",
              backgroundColor: isFaqButton5Clicked ? "#222a2f" : "initial",
              color: isFaqButton5Clicked ? "white" : "initial",
            },
            "& .MuiAccordionSummary-expandIconWrapper": {
              color: isFaqButton5Clicked ? "white" : "initial",
            },
          }}
        >
          <AccordionSummary
            onClick={clickHandler5}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h5>5. How can I get help or report a problem?</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              For support or to report listings, use the contact form on the site or
              email our support team at support@example.com. For urgent matters, local
              phone support details are available on the About / Contact page.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
