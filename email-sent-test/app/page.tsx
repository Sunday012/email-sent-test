"use client"

import { FormEvent, useCallback, useMemo, useState } from "react";
import GithubAccessTokenEmail from "./components/email-template";
import { Resend } from "resend";

const Home = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string[]>([])

    if(password !== confirmPassword){
        setError(["password and your confirmed password do not match"])
        setIsSubmitting(false)
    }

    const handleChange = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault
        setIsSubmitting(true)

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitting(false)
    }

    const handleInputChange = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value)
    }, [setEmail])
    const handlePasswordChange = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
          setPassword(e.target.value)
    }, [])
    const handleConfirmPasswordChange = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
          setConfirmPassword(e.target.value)
    }, [])

  return (
    <div style={container}>
      <div style={formContainer}>
        {
            error && <div style={error}>{error}</div>
        }
        <form style={form} onSubmit={handleChange}>
          <h2>Welcome</h2>
          <input 
          type="email" 
          style={Input} 
          value={email} 
          onChange={handleInputChange}
          placeholder="email"
          required
          />
          <input 
          type="password" 
          style={Input} 
          value={password}
          onChange={handlePasswordChange}
          placeholder="password"
          required
          minLength={8}
          />
          <input 
          type="confirmpassword" 
          style={Input}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="Confirm password"
          required
          minLength={8}
          />

          <button type="submit" style={button} disabled={isSubmitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;

const container = {
  
  height: '100vh',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const formContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: '40%'
};

const form = {
  padding: "40px 40px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "grey",
  borderRadius: "10px",
  gap: "20px",
  width: '100%'
};
const Input = {
  padding: "10px 20px",
  borderRadius: "5px",
  outline: "none",
  border: "none",
};

const button = {
  backgroundColor: "black",
  padding: "10px 20px",
  borderRadius: "5px",
  outline: "none",
  border: "none",
  color: "white",
};

const error = {
    backgroundColor: "red",
    color: "white",
}
