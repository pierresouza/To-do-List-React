import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  .main-container {
    height: auto;
    width: 50vw;
    background: #ffffff;
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 16px;

    .filter {
      header {
        display: flex;
        align-items: center;
        width: 50vw;
        list-style-type: none;

        img {
          margin-left: 16px;
        }

        h1 {
          padding-left: 16px;
          flex: 1;
        }

        select {
          border: 0;
          height: 24px;
          width: 72px;
          -webkit-appearance: none;
          text-align: center;
          box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.15);
          border-radius: 8px;
          &:focus {
            outline: 0;
          }

          option {
            color: #3d82eb;
            box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.15);
          border-radius: 8px;
          }
        }
      }
    }

    .inputData {
      width: 50vw;
      height: auto;
      display: flex;
      margin: 16px 0;

      li {
        width: 50vw;
        display: flex;
        &:hover {
          transition: all 0.6s;
          background: #ffffff;
          box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.15);
          border-radius: 5px;
        }
        .leftInfo {
          width: 50vw;
          margin-left: 20px;
          display: flex;
          align-items: center;

          input {
            height: 24px;
            width: 24px;
          }

          p {
            padding-left: 24px;
          }
        }
        button {
          border: 0;
          background: white;
          cursor: pointer;
          margin-right: 16px;
        }
      }
    }
  }

  form {
    padding: 16px;
    display: flex;

    .teste {
      width: 40vw;
      display: flex;
      align-items: center;
      button {
        background: white;
        border: 0;
        padding-right: 24px;
      }

      input {
        width: 50%;
        height: 24px;
        border: 0;
        &::placeholder {
          color: #3d82eb;
        }

        &:focus {
          outline: 0;
        }
      }
    }
  }
`;
