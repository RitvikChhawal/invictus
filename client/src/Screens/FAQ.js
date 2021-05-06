import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core'
import FaqList from '../Components/FaqList/FaqList';
import Box from '@material-ui/core/Box';
import faq_bg from '../Assets/Backgrounds/faq_bg.jpg'
import FAQData from './FAQData';


const useStyles = makeStyles({
    root: {
        background: '#1B1430',/* fallback for old browsers */
        background: '-webkit-linear-gradient(to top, #3c1053, #ad5389)', /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to top,#642A7F, #1B1430)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        height: '100vh',
        width: '100%',
    },
    header: {
        marginTop: '60px',
        padding: '20px',
        color: '#FFFFFF',
        fontSize: '3rem',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Rajdhani',
        fontStyle: 'normal',
        fontWeight: '400',
    }
})


const FAQ = () => {

    const [faqs, setFaqs] = useState(FAQData);

    const toggleFaq = index => {
        setFaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open;
            } else {
                faq.open = false;
            }
            return faq;
        }))
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className="faq-section">
                <Box className={classes.header}>F . A . Q</Box>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FaqList
                            faq={faq}
                            index={index}
                            toggleHandler={toggleFaq}
                            key={faq.id}
                        />
                    ))}
                </div>

            </div>
        </div>
    );

}


export default FAQ;
