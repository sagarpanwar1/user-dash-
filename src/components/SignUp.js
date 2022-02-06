import { Button, Form, FormGroup, Input, Label, FormText } from "reactstrap";


function SignUp() {

    return (
        <div className="signupcontainer">
            <h2>SignUp form</h2>

            <Form method="post" action="#">

                <FormGroup>
                    {/* <Label for="examplePassword">Password</Label> */}
                    <Input type="text" name="username" id="username" placeholder=" Enter password " />
                </FormGroup>

                <FormGroup>
                    {/* <Label for="exampleEmail">Email</Label> */}
                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email" />
                </FormGroup>
                <FormGroup>
                    {/* <Label for="examplePassword">Password</Label> */}
                    <Input type="password" name="password" id="examplePassword" placeholder=" Enter password " />
                </FormGroup>

                <FormGroup>
                    <Button id="submitButton">SigIn</Button>
                </FormGroup>


            </Form>
        </div>
    );
}


export default SignUp 