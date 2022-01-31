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
    const [cacahueteSalty, setCacahueteSalty ] = useState(false);

    return (<>
        <h3>Formulaire de contact</h3>
        <form className={style.myForm}>
            <div>
                <label htmlFor='firstname'>Prenom</label>
                <input type='text' id='firstname' />
            </div>

            <div>
                <label htmlFor='lastname'>Nom</label>
                <input type='text' id='lastname' />
            </div>
            
            <div>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' />
            </div>

            <div>
                <label htmlFor='need'>Type de besoin</label>
                <select id='need'>
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
                <textarea id='message' />
            </div>

            <div>
                <label htmlFor='cacahuetes'>Aimez vous les cacahuètes</label>
                <input type='radio' name='cacahuetes' id='cacahuetes_value1' value='yes'/>
                <label htmlFor='cacahuetes_value1'>Oui</label>
                <input type='radio' name='cacahuetes' id='cacahuetes_value2' value='no'/>
                <label htmlFor='cacahuetes_value2'>Non</label>
                <input type='radio' name='cacahuetes' id='cacahuetes_value3' value='n/a'/>
                <label htmlFor='cacahuetes_value3'>N/A</label>
            </div>

            <div>
                <label htmlFor='cacahuetes_choice'>Quel type de cacahuetes ?</label>
                <input type='checkbox' id='cacahuetes_choice1' value='sweet'/>
                <label htmlFor='cacahuetes_choice1'>Sucré</label>
                <input type='checkbox' id='cacahuetes_choice2' value='salty'/>
                <label htmlFor='cacahuetes_choice2'>Salé</label>
            </div>

            <div>
                <input type='submit' value='Envoyer'/>
            </div>
        </form>
    </>);
};

export default ContactForm;