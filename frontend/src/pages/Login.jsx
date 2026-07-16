import MainLayout from "../layouts/MainLayout";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function Login() {
  return (
    <MainLayout>
      <div className="mx-auto max-w-md">
        <Card>
          <h1 className="mb-8 text-center font-heading text-4xl font-bold">
            Welcome Back
          </h1>

          <div className="space-y-5">
            <Input label="Email" placeholder="john@example.com" />

            <Input label="Password" type="password" />

            <Button className="w-full">Login</Button>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
