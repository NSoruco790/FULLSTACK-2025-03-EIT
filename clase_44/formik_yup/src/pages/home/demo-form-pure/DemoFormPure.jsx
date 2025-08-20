import { useState } from "react";

const DemoFormPure = () => {
    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos del formulario:", formData);
        alert("Formulario enviado: " + JSON.stringify(formData, null, 2));
    };

    return (
        <div className="demo-form-pure">
            <h3>Formulario Básico con useState</h3>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ingresa tu nombre"/>
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"/>
                </div>

                <button type="submit">Enviar Formulario</button>
            </form>
        </div>
    );
};

export default DemoFormPure;