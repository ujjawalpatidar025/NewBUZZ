import { Navbar } from "../commons/navbar";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const admins = [
  { id: 1, name: "John Doe", email: "john@example.com", password: "hello" },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    password: "hello",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    password: "hello",
  },
];

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8 w-full sm:w-5/6">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2 text-gray-800 dark:text-white">
              Welcome to New Buzz Admin
            </h1>
            <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              Manage your admin users with ease
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              This dashboard allows you to view and manage all registered admin
              users. You can add new admins, view their details, and ensure
              secure access to your system.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="sm:text-2xl text-md font-semibold text-gray-800 dark:text-white flex items-center">
                <Users className="mr-2" />
                Registered Admins
              </h3>
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-black text-white hover:bg-gray-800">
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Admin
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[400px] w-[95vw]  rounded-md bg-white dark:bg-gray-800">
                  <DialogHeader>
                    <DialogTitle className="text-gray-800 dark:text-white">
                      Add New Admin
                    </DialogTitle>
                    <DialogDescription className="text-gray-600 dark:text-gray-400">
                      Enter the details of the new admin user.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter name"
                        className="bg-gray-100 dark:bg-gray-700"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter email"
                        className="bg-gray-100 dark:bg-gray-700"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="password"
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter password"
                        className="bg-gray-100 dark:bg-gray-700"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-black text-white hover:bg-gray-800"
                    >
                      Submit
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-100 dark:bg-gray-700">
                    <TableHead className="text-gray-700 dark:text-gray-300">
                      Name
                    </TableHead>
                    <TableHead className="text-gray-700 dark:text-gray-300">
                      Email
                    </TableHead>
                    <TableHead className="text-gray-700 dark:text-gray-300">
                      Password
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {admins.map((admin) => (
                    <TableRow
                      key={admin.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <TableCell className="text-gray-800 dark:text-gray-300">
                        {admin.name}
                      </TableCell>
                      <TableCell className="text-gray-800 dark:text-gray-300">
                        {admin.email}
                      </TableCell>
                      <TableCell className="text-gray-800 dark:text-gray-300">
                        {admin.password}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
