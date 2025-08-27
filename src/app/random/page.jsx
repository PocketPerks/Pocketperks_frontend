'use client'
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 40px;
  font-family: Arial, sans-serif;
`;

const Breadcrumb = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  .active {
    font-weight: bold;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const FormSection = styled.div`
  flex: 2;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  h2 {
    margin-bottom: 5px;
  }
  p {
    font-size: 14px;
    color: #555;
    margin-bottom: 20px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FileUpload = styled.div`
  margin-bottom: 15px;
  .file-btn {
    display: inline-block;
    background: #007bff;
    color: white;
    padding: 8px 14px;
    border-radius: 4px;
    cursor: pointer;
    input {
      display: none;
    }
  }
  .file-info {
    display: block;
    font-size: 12px;
    margin-top: 5px;
    color: #666;
  }
`;

const Captcha = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  .captcha-img {
    padding: 8px 14px;
    background: #f1f1f1;
    font-weight: bold;
    font-size: 18px;
  }
  input {
    flex: 1;
    padding: 10px;
  }
`;

const SubmitBtn = styled.button`
  padding: 10px 20px;
  background: #9995c1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SideSection = styled.div`
  flex: 1;
`;

const OfferCard = styled.div`
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 20px;
  img {
    max-width: 100%;
    border-radius: 6px;
    margin-bottom: 10px;
  }
`;

const StepsList = styled.ul`
  list-style: none;
  padding: 0;
  li {
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

const ContactUs = () => {
  return (
    <Container>
      {/* Breadcrumb */}
      <Breadcrumb>
        <span>Home</span> / <span className="active">Contact Us</span>
      </Breadcrumb>

      <Wrapper>
        {/* Left Side Form */}
        <FormSection>
          <h2>Say Hello!</h2>
          <p>
            Please elaborate your concern in the below, Our support team will endeavour to get back to you within 48 hours
          </p>

          <form>
            <FormGroup>
              <input type="text" placeholder="Full name" />
              <input type="email" placeholder="Email address" />
            </FormGroup>

            <TextArea placeholder="Your Message" />

            <FileUpload>
              <label className="file-btn">
                Choose File
                <input type="file" accept=".jpg,.jpeg,.png,.pdf" />
              </label>
              <span className="file-info">
                Allowed file types: .jpg, .pdf, .png, .jpeg | Max size: 2MB
              </span>
            </FileUpload>

            <Captcha>
              <div className="captcha-img">g49Ou</div>
              <input type="text" placeholder="Enter captcha" />
            </Captcha>

            <SubmitBtn type="submit">Submit</SubmitBtn>
          </form>
        </FormSection>

        {/* Right Side Info */}
        <SideSection>
          <OfferCard>
            <h4>Pick of the Day</h4>
            <img src="https://via.placeholder.com/250x120" alt="offer" />
            <p>Find Best Deals on Vijay Sales ...</p>
          </OfferCard>

          <h4>How CashKaro Works?</h4>
          <StepsList>
            <li>Visit CashKaro app first before you shop online</li>
            <li>Select the brand you want to shop on</li>
            <li>Shop & pay as usual on the site</li>
            <li>Get Cashback on your order</li>
            <li>Transfer your Cashback to your Bank or Wallet</li>
          </StepsList>
        </SideSection>
      </Wrapper>
    </Container>
  );
};

export default ContactUs;