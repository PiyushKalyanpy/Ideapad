import {
  Button,
  Container,
  Card,
  Row,
  Text,
  Spacer,
  Loading,
  Image,
} from "@nextui-org/react";
import { auth, firestore } from "../firebase/firebasedb";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {useRouter } from "next/router";
import { useAuthState } from 'react-firebase-hooks/auth';

const Authentication = () => {

  const router = useRouter();
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  };
  
  const [user, loading] = useAuthState(auth);
  if(user && user){
    router.push("/todo")
  }
  if(loading){
    return (
      <div className=" flex w-screen h-screen">
        <Loading  className="m-auto"/>
      </div>
    )
  }

  return (
    <div className="flex m-auto w-1/4 h-fit bg-white flex-col rounded-3xl shadow-2xl shadow-slate-300/50 p-6 items-center">
      <div className="flex flex-col m-auto w-fit">
        <div className="flex w-1/4  m-auto">
          <Image src="./logo.png" layout="fill" />
        </div>
        <Spacer y={1} />
        <Text className="font-sans font-semibold text-2xl  m-auto" h2>
          Todo
        </Text>

        <h2
          className="font-sans font-normal text-slate-500 text-base text-center   m-auto"
          h2
        >
          Sign in to securely store your work on the cloud, and access it from
          anywhere, on any device.{" "}
        </h2>
      </div>
      <Spacer y={2} />
      <Button color="black " className="w-fit" onClick={signIn}>
        <Image src="./google.svg" width={20} height={30} />
        <Spacer x={1} />
        Continue with Google
      </Button>
    </div>
  );
};

export default Authentication;
