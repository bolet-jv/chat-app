import {Alert, Button, Form, Row, Col, Stack} from "react-bootstrap";

const Login = () => {
    return ( 
        <>
         <form>
            <Row
                style={{
                    height: "100vh",
                    justifyContent: "center",
                    paddingTop: "10%",
                }}
            >
                <Col xs={6}>
                 <Stack gap={3}>
                    <h2>Log in</h2>
                    <Form.Control type="email" placeholder="email"/>
                    <Form.Control type="password" placeholder="password"/>
                    <Button variant="primary" type="submit">
                        Log in
                    </Button>
                <Alert variant="danger"><p>An error ocurred</p></Alert>


                </Stack>
                </Col>
            </Row>
         </form>
        </>
     );
}
 
export default Login;