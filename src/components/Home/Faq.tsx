import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

export default function BasicAccordion() {
  const { t } = useTranslation();
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
        <h3>{t('faq_title')}</h3>
        <img src="hr.svg" alt="" />
        <p>
          {t('faq_description')}
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
            <h5>{t('faq_q1')}</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {t('faq_a1')}
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
            <h5>{t('faq_q2')}</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {t('faq_a2')}
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
            <h5>{t('faq_q3')}</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {t('faq_a3')}
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
            <h5>{t('faq_q4')}</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {t('faq_a4')}
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
            <h5>{t('faq_q5')}</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {t('faq_a5')}
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
