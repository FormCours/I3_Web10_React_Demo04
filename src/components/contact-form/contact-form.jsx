import { useState } from 'react';
import style from './contact-form.module.css';

const ContactForm = (props) => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [need, setNeed] = useState('html');
    const [message, setMessage] = useState('');
    const [cacahuete, setCacahuete] = useState('yes');
    const [cacahueteSweet, setCacahueteSweet] = useState(false);
    const [cacahueteSalty, setCacahueteSalty] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            firstname,
            lastname,
            email,
            need,
            message,
            cacahuete,
            cacahueteSweet,
            cacahueteSalty
        };

        console.log(data);
        // Cas Réel: Traitement des données, envois d'une requete AJAX 

        handleResetForm();
    };

    const handleResetForm = () => {
        setFirstname('');
        setLastname('');
        setEmail('');
        setNeed('html');
        setMessage('');
        setCacahuete('yes');
        setCacahueteSweet(false);
        setCacahueteSalty(false);
    };

    const handleDoubleChoice = () => {
        setCacahueteSweet(true);
        setCacahueteSalty(true);
    }

    return (<>
        <h3>Formulaire de contact</h3>
        <form className={style.myForm} onSubmit={handleSubmit}>
            <div>
                <label htmlFor='firstname'>Prenom</label>
                <input type='text' id='firstname'
                    onChange={(e) => setFirstname(e.target.value)} value={firstname} />
            </div>

            <div>
                <label htmlFor='lastname'>Nom</label>
                <input type='text' id='lastname'
                    onChange={(e) => setLastname(e.target.value)} value={lastname} />
            </div>

            <div>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email'
                    onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>

            <div>
                <label htmlFor='need'>Type de besoin</label>
                <select id='need' onChange={(e) => setNeed(e.target.value)} value={need}>
                    <optgroup label='Backend'>
                        <option value='php'>PHP</option>
                        <option value='nodejs'>NodeJS</option>
                    </optgroup>
                    <optgroup label='Frontend'>
                        <option value='html'>Html / CSS / JS</option>
                        <option value='reactjs'>React</option>
                        <option value='design'>Design</option>
                    </optgroup>
                </select>
            </div>

            <div>
                <label htmlFor='message'>Message</label>
                <textarea id='message'
                    onChange={(e) => setMessage(e.target.value)} value={message} />
            </div>

            <div>
                <label htmlFor='cacahuetes'>Aimez vous les cacahuètes</label>

                <input type='radio' name='cacahuetes' id='cacahuetes_value1' value='yes'
                    onChange={(e) => setCacahuete(e.target.value)}
                    checked={cacahuete === 'yes'} />
                <label htmlFor='cacahuetes_value1'>Oui</label>

                <input type='radio' name='cacahuetes' id='cacahuetes_value2' value='no'
                    onChange={(e) => setCacahuete(e.target.value)}
                    checked={cacahuete === 'no'} />
                <label htmlFor='cacahuetes_value2'>Non</label>

                <input type='radio' name='cacahuetes' id='cacahuetes_value3' value='n/a'
                    onChange={(e) => setCacahuete(e.target.value)}
                    checked={cacahuete === 'n/a'} />
                <label htmlFor='cacahuetes_value3'>N/A</label>
            </div>

            {cacahuete === 'yes' && (
                <div>
                    <label htmlFor='cacahuetes_choice'>Quel type de cacahuetes ?</label>

                    <input type='checkbox' id='cacahuetes_choice1'
                        onChange={(e) => setCacahueteSweet(e.target.checked)}
                        checked={cacahueteSweet} />
                    <label htmlFor='cacahuetes_choice1'>Sucré</label>

                    <input type='checkbox' id='cacahuetes_choice2'
                        onChange={(e) => setCacahueteSalty(e.target.checked)}
                        checked={cacahueteSalty} />
                    <label htmlFor='cacahuetes_choice2'>Salé</label>

                    {(!cacahueteSweet || !cacahueteSalty) && (
                        <label className={style.doubleChoice} onClick={handleDoubleChoice}>Les deux</label>
                    )}
                </div>
            )}

            <div>
                <input type='submit' value='Envoyer' />
            </div>
        </form>
    </>);
};

export default ContactForm;