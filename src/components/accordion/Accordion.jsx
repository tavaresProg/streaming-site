import './Accordion.css';
import { BiSolidDownArrow } from 'react-icons/bi';

const Accordion = () => {
    return (
        <div className="faq">
            <h1>FAQ</h1>

            <div className="question">
                <div className="title">
                    <input type="radio" name="title" id="title-1" />
                    <label htmlFor="title-1">What is Series Hub?
                        <span><BiSolidDownArrow /></span>
                    </label>
                    <p>It is the most complete series streaming service in the world.</p>
                </div>
            </div>

            <div className="question">
                <div className="title">
                    <input type="radio" name="title" id="title-2" />
                    <label htmlFor="title-2">
                        Can I use the service for free?
                        <span><BiSolidDownArrow /></span>
                    </label>
                    <p>You can watch a limited selection of series for free with ads.</p>
                </div>
            </div>

            <div className="question">
                <div className="title">
                    <input type="radio" name="title" id="title-3" />
                    <label htmlFor="title-3">
                        What are the subscription benefits?
                        <span><BiSolidDownArrow /></span>
                    </label>
                    <p>
                        Complete catalog of series without ads, up to 5 screens and the possibility to watch offline.</p>
                </div>
            </div>

            <div className="question">
                <div className="title">
                    <input type="radio" name="title" id="title-4" />
                    <label htmlFor="title-4">What is the free trial?
                        <span><BiSolidDownArrow /></span>
                    </label>
                    <p>
                        You can try the full experience for 30 days trial before purchasing a subscription.</p>
                </div>
            </div>

            <div className="question">
                <div className="title">
                    <input type="radio" name="title" id="title-5" />
                    <label htmlFor="title-5">
Can I cancel the subscription at any time?
                        <span><BiSolidDownArrow /></span>
                    </label>

                    <p>Yes! There are no fines or additional charges, when you cancel the service the subscription is removed.</p>                </div>
            </div>

        </div>
    )
}

export default Accordion