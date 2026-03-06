import { useState, useCallback, useRef } from "react";
import "./App.css";
import CardMusic from "./components/CardMusic.jsx";
import useCurrencyInfo from "./hooks/currencyHook.js";
import ContextS from "./ContextScreen.jsx";

const generatePassword = (length, numAllowed, charAllowed) => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if (numAllowed) str += "0123456789";
  if (charAllowed) str += "!@#$%^&*(){}[]:><?.,~";

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * str.length);
    pass += str.charAt(index);
  }

  return pass;
};

function App() {
  // ===== Currency Converter =====
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  // ===== Music Card =====
  const musicDetail = {
    name: "Mi Amor",
    singer: "Fateh Khan",
    duration: "2:09",
  };

  // ===== Counter =====
  const [counter, setCounter] = useState(20);

  const addValue = () => {
    if (counter < 40) {
      setCounter((prev) => prev + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };

  // ===== Color Changer =====
  const [color, setColor] = useState("olive");

  // ===== Password Generator =====
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState(() =>
    generatePassword(8, false, false)
  );

  const passwordRef = useRef(null);

  const copyPasswordtoClip = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      window.navigator.clipboard.writeText(password);
    }
  }, [password]);

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-3xl font-bold">Hola: {counter}</h1>

        <button className="pd-20" onClick={addValue}>
          Add
        </button>
        <br />
        <button onClick={removeValue}>Sub</button>

        <div>
          <h1 className="flex justify-center bg-blue-400 text-white py-2 px-4 rounded-xl">
            Tailwind Test
          </h1>
        </div>

        <div className="ml-10 pl-5 pb-5">
          <CardMusic obj={musicDetail} />
          <CardMusic />
        </div>

        {/* Currency Converter */}
        <div className="flex flex-col items-center gap-3 my-4">
          <h2 className="text-xl font-semibold">Currency Converter</h2>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value === "" ? 0 : Number(e.target.value))
              }
              className="px-2 py-1 rounded border"
            />
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="px-2 py-1 rounded border"
            >
              {options.map((currencyCode) => (
                <option key={currencyCode} value={currencyCode}>
                  {currencyCode.toUpperCase()}
                </option>
              ))}
            </select>
            <button
              onClick={swap}
              className="px-3 py-1 bg-gray-800 text-white rounded"
            >
              Swap
            </button>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="px-2 py-1 rounded border"
            >
              {options.map((currencyCode) => (
                <option key={currencyCode} value={currencyCode}>
                  {currencyCode.toUpperCase()}
                </option>
              ))}
            </select>
            <button
              onClick={convert}
              className="px-3 py-1 bg-blue-600 text-white rounded"
            >
              Convert
            </button>
          </div>
          <p className="text-lg">
            Converted Amount:{" "}
            <span className="font-semibold">
              {Number.isFinite(convertedAmount)
                ? convertedAmount.toFixed(2)
                : "0.00"}
            </span>
          </p>
        </div>

        <ContextS />

        {/* Color Buttons */}
        <div className="flex justify-center p-5">
          <div className="inline-flex gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {["red", "black", "blue", "orange", "yellow", "green", "pink"].map(
              (c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-24 h-10 rounded-full text-white bg-${c}-500`}
                >
                  {c}
                </button>
              )
            )}
          </div>
        </div>

        {/* Password Generator */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-2 shadow-lg px-3 py-2 rounded-3xl bg-black">
            <input
              type="text"
              value={password}
              className="outline-none bg-white py-1 px-3"
              readOnly
              ref={passwordRef}
            />
            <button
              className="bg-green-300 px-3"
              onClick={copyPasswordtoClip}
            >
              Copy
            </button>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="range"
              min={8}
              max={30}
              value={length}
              onChange={(e) => {
                const newLength = Number(e.target.value);
                setLength(newLength);
                setPassword(
                  generatePassword(newLength, numAllowed, charAllowed)
                );
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex gap-4">
            <label>
              <input
                type="checkbox"
                checked={numAllowed}
                onChange={() =>
                  setNumAllowed((prev) => {
                    const updated = !prev;
                    setPassword(
                      generatePassword(length, updated, charAllowed)
                    );
                    return updated;
                  })
                }
              />{" "}
              Numbers
            </label>

            <label>
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() =>
                  setCharAllowed((prev) => {
                    const updated = !prev;
                    setPassword(
                      generatePassword(length, numAllowed, updated)
                    );
                    return updated;
                  })
                }
              />{" "}
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
