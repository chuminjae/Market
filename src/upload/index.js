import { Form, Divider, Input, InputNumber } from "antd";
import "./index.css";
import { Button } from "antd";
function Uploadpage() {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div id="upload-container">
      <Form name="upload" onFinish={onSubmit}>
        <Form.Item
          label={<div className="upload-label">상품 사진</div>}
          name="img-upload"
        >
          <div id="img-uploadplace">
            <img src="/images/icons/camera.png" />
            <span>upload the image</span>
          </div>
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">판매자 명</div>}
          name="seller"
          rules={[{ required: true, message: "WTF" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="Put your name"
          ></Input>
        </Form.Item>
        <Divider />
        <Form.Item
          name="name"
          label={<div className="upload-label">상품 이름</div>}
          rules={[{ required: true, message: "WTF" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="Put the name of product"
          ></Input>
        </Form.Item>
        <Divider />
        <Form.Item
          name="price"
          label={<div className="upload-label">상품 가격 </div>}
          rules={[{ required: true, message: "WTF" }]}
        >
          <InputNumber
            className="upload-price"
            size="large"
            defaultValue={0}
          ></InputNumber>
        </Form.Item>
        <Divider />
        <Form.Item
          name="description"
          label={<div className="upload-label">상품 소개</div>}
          rules={[{ required: true, message: "WTF" }]}
        >
          <Input.TextArea
            size="large"
            id="product-description"
            showCount
            maxLength={300}
            placeholder="상품 소개"
          />
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default Uploadpage;
