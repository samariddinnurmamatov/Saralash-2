import { InputStyles } from '../../Home';
import Input from '../../../components/ui/Input';
import { INPUT_TYPE } from '../../../components/ui/utils/constant';

const ContactForm = () => (
  <div className="flex flex-col items-center justify-between gap-6 w-[100%]">
    <Input
        typeInput="name"
        styleType={INPUT_TYPE.SIMPLE}
        className={`${InputStyles} !border-stroke w-[100%]`}
        placeholder="Your Name"
    />
    <Input
        typeInput="email"
        styleType={INPUT_TYPE.SIMPLE}
        className={`${InputStyles} !border-stroke w-[100%]`}
        placeholder="Your Email Address"
    />
    <Input
        typeInput="text"
        styleType={INPUT_TYPE.SIMPLE}
        className={`${InputStyles} !border-stroke w-[100%]`}
        placeholder="Subject"
    />
    <textarea rows="6" placeholder="Message" className="form-control w-[100%] border-stroke border-[1px] p-[15px]" name="message" id="message"></textarea>
    <button className="border-[1px] border-solid border-gray-500 bg-black text-white py-3 px-9 w-[100%]" type="button">SUBMIT</button>
  </div>
);

export default ContactForm;
