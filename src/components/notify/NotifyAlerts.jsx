"use client";
// imports
import { useState } from "react";
// bootstrap
import { Alert, Toast, ToastContainer } from "react-bootstrap";
// Notify Alerts components
export const NotifyAlerts = ({ message }) => {
	const [show, setShow] = useState(true);

	const toggleShow = () => setShow(!show);

	const date = new Date();

	return (
		<>
			<ToastContainer
				className="p-3"
				position={"top-end"}
				style={{ zIndex: 1 }}
			>
				<Toast show={show} onClose={toggleShow} delay={4000} autohide>
					<Toast.Header>
						<strong className="me-auto">Alerta!</strong>
						<small>{date.getSeconds()} seg</small>
					</Toast.Header>
					<Toast.Body>{message ? message : "Alerta de prueba."}</Toast.Body>
				</Toast>
			</ToastContainer>
		</>
	);
};
