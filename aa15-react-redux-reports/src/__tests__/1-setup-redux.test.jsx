import configureStore from '../store';
import { act } from '@testing-library/react';

describe('01 - Setup Redux', () => {
  describe('configureStore', () => {
    it('should be a function that returns a Redux store', () => {
      expect(typeof configureStore).toEqual('function');
      const store = configureStore();
      expect(store).toHaveProperty('dispatch');
      expect(store).toHaveProperty('getState');
      expect(store).toHaveProperty('subscribe');
    });
  });

  describe('initial Redux store state', () => {
    it('should load the Redux store state with the initial books', () => {
      const store = configureStore();
      expect(store.getState()).toEqual({
        reports: {
          1: {
            "id": 1,
            "improvement": "Dang, I wish I knew Redux as well as Brad. Also, I need to get better at JavaScript.",
            "understanding": "Confident I understand everything."
          },
          2: {
            "id": 2,
            "improvement": "Golly, I wish I knew JavaScript as well as Luke. Also, I need to get better at Git.",
            "understanding": "Confident I understand all."
          },
          3: {
            "id": 3,
            "improvement": "Golly, I wish I knew React as well as Tyler. Also, I need to get better at Redux.",
            "understanding": "Confident I understand all."
          },
          4: {
            "id": 4,
            "improvement": "Wow, I wish I knew SQL as well as Todd. Also, I need to get better at Jest.",
            "understanding": "Extremely comfortable. It's easy. Would ace the assessment."
          },
          5: {
            "id": 5,
            "improvement": "Geez, I wish I knew Sequelize as well as Winston. Also, I need to get better at ES5.",
            "understanding": "Extremely comfortable. It's easy. Would ace the assessment."
          }
        }
      });
    });
  });

  describe('React application is connected to Redux', () => {
    it('should provide the Redux store to the whole React application', async () => {
      const div = document.createElement("div");
      div.id = "root";
      document.body.appendChild(div);

      vi.mock("../App", async () => {
        const { useContext } = await vi.importActual('react');
        const { ReactReduxContext } = await vi.importActual('react-redux');
        function VitestApp() {
          const { store } = useContext(ReactReduxContext);
          return (
            <p>
              {JSON.stringify(store.getState())}
            </p>
          );
        }
        return {
          default: VitestApp
        }
      });

      await act(async () => await import("../main.jsx"));
      expect(div).toHaveTextContent(JSON.stringify({
        reports: {
          1: {
            "id": 1,
            "improvement": "Dang, I wish I knew Redux as well as Brad. Also, I need to get better at JavaScript.",
            "understanding": "Confident I understand everything."
          },
          2: {
            "id": 2,
            "improvement": "Golly, I wish I knew JavaScript as well as Luke. Also, I need to get better at Git.",
            "understanding": "Confident I understand all."
          },
          3: {
            "id": 3,
            "improvement": "Golly, I wish I knew React as well as Tyler. Also, I need to get better at Redux.",
            "understanding": "Confident I understand all."
          },
          4: {
            "id": 4,
            "improvement": "Wow, I wish I knew SQL as well as Todd. Also, I need to get better at Jest.",
            "understanding": "Extremely comfortable. It's easy. Would ace the assessment."
          },
          5: {
            "id": 5,
            "improvement": "Geez, I wish I knew Sequelize as well as Winston. Also, I need to get better at ES5.",
            "understanding": "Extremely comfortable. It's easy. Would ace the assessment."
          }
        }
      }));
    });
  });
});
