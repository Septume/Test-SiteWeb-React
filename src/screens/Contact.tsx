import { SubmitHandler, useForm } from "react-hook-form"

type FormInputs = {
    subject: string,
    email: string,
    message: string
}

export const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()

    return (
        <main>
            <h3 className="text-3xl font-extrabold mb-4">Contact</h3>
            <p>Email = lkhghfgziegf</p>
        
            <form className="mt-5">
                <div className="mb-3">
                    <label className="block ml-3" htmlFor="subject">Sujet du mail</label>
                    <input { ...register("subject") } className="border" type='text' name="subject" id="subject" placeholder="Quel est le sujet ?"/>
                </div>
                <div className="mb-3">
                    <label className="block ml-3" htmlFor="email">E-Mail</label>
                    <input { ...register("email") } className="border" type='email' name="email" id="email" placeholder="Quel votre E-Mail"/>
                </div>
                <div className="mb-3">
                    <label className="block ml-3" htmlFor="message">Message</label>
                    <textarea { ...register("message") } rows={5} className="border resize-none" name="message" id="message" placeholder="Votre message"/>
                </div>
                <input className="block bg-[purple] text-[white] py-3 px-3 hover:bg-[gray]" type='submit'/>
            </form>
        </main>
    )
}