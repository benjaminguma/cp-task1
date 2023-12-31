import { Checkbox, Form, Input } from "antd";

import { MultiChoiceIcon, PlusIcon } from "../assets/Icons";

const MultiChoice = () => {
  return (
    <>
      <Form.List
        name="choices"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 2) {
                return Promise.reject(new Error("At least 2 choices"));
              }
            },
          },
        ]}
      >
        {(fields, { add }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item style={{ margin: 0 }} required={false} key={field.key}>
                <div className="flex items-center w-full gap-2">
                  <MultiChoiceIcon />
                  <Form.Item
                    {...field}
                    style={{ width: "100%", marginTop: 20 }}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Please input type or delete this field.",
                      },
                    ]}
                  >
                    <Input placeholder="Type here" />
                  </Form.Item>

                  {fields.length - index === 1 && (
                    <div
                      onClick={() => add()}
                      className="scale-50 cursor-pointer"
                    >
                      <PlusIcon />
                    </div>
                  )}
                </div>
              </Form.Item>
            ))}
          </>
        )}
      </Form.List>
      <Form.Item
        initialValue={false}
        className="mt-0 mb-10"
        name="other"
        valuePropName="checked"
      >
        <Checkbox>Enable “Other” option</Checkbox>
      </Form.Item>
      <Form.Item
        label={
          <div className="text-[20px] font-semibold">Max choice allowed</div>
        }
        name="maxChoice"
        rules={[
          {
            required: true,
            message: "Please input your a max choice!",
          },
        ]}
      >
        <Input
          placeholder="Enter number of choice allowed here"
          style={{ width: "100%" }}
          type="number"
        />
      </Form.Item>
    </>
  );
};

export default MultiChoice;
