"use client";
// imports
import { useState } from "react";
// bootstrap
import { Alert, Toast, ToastContainer } from "react-bootstrap";
// Notify Alerts components
export const NotifyAlerts = ({ message }) => {
	const [show, setShow] = useState(true);

	const toggleShow = () => setShow(!show);

	return (
		<>
			<ToastContainer
				className="p-3"
				position={"top-end"}
				style={{ zIndex: 1 }}
			>
				<Toast show={show} onClose={toggleShow} delay={3000} autohide>
					<Toast.Header>
						<strong className="me-auto">Alerta!</strong>
						<small>11 mins ago</small>
					</Toast.Header>
					<Toast.Body>{message ? message : "Alerta de prueba."}</Toast.Body>
				</Toast>
			</ToastContainer>
		</>
	);
};
