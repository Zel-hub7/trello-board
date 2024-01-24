import Button from "@components/shared/Button"
import { useBoards } from "@src/context";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from 'yup';
import { useState } from "react";
import StatusDropdown from "@components/shared/StatusDropdown";
import TextInput from "@components/shared/TextInput";
import TextArea from "@components/shared/TextArea";
import InputArray from "@components/shared/InputArray";

const AddNewTaskModal = ({onClose}) => {
    const { columns, createTask } = useBoards();
    const [status, setStatus] = useState(columns[0].name);
    return (
        <Formik
            initialValues={{
                title: "",
                description: "",
                subtasks: ['', ''],
                status: status
            }}
            // validationSchema={validate}
            onSubmit={ (values) => {
                console.log('test');
                values.status = status;
                createTask(values)
                onClose()
            }}
            >
            { formik => (
                    <div className="w-full mx-auto rounded-md p-6 bg-white dark:bg-darkGrey md:p-8">
                        <h1 className="heading-lg mb-6">Add New Task</h1>

                    <Form>
                        <TextInput label="Title" name="title" type="text" placeholder="Add you Task"/>
                        {/* <TextArea label="Description" name="description" type="text" placeholder="Write your Description"/> */}

                        {/* <InputArray label="subtasks" array={formik.values.subtasks} /> */}

                        <StatusDropdown status={status} setStatus={setStatus}/>

                        <Button type="submit" className="mt-6 w-full new text-white text-base rounded-full p-2 transition duration-200 hover:bg-mainPurpleHover">+ Add New Task</Button>
                    </Form>
                </div>
            )}

        </Formik>
    )
}
export default AddNewTaskModal
