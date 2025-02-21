"use client";
import { Switch, Button, Progress } from "antd";
import { useRouter } from "next/navigation";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function TalkPage() {
  const router = useRouter();

  // Define state for form fields
  const [talkFormData, setFormData] = useState({
    budget: "",
    teamSize: "",
    leads: "",
    leadDistribution: "",
    challenge: "",
    additionalInfo: "",
  });

  const handleSwitchChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleTextareaChange = (e) => {
    setFormData((prev) => ({ ...prev, additionalInfo: e.target.value }));
  };

  const handleSubmit = () => {
    const storedData = sessionStorage.getItem("formData");
    const parsedData = storedData ? JSON.parse(storedData) : {};

    const updatedData = { ...parsedData, talkFormData };

    sessionStorage.setItem("formData", JSON.stringify(updatedData));

    console.log("END:::::", updatedData);
    router.push("/finalpage");
  };

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-white p-4 sm:p-8 m-4 sm:m-8">
      {/* Left Section */}
      <div className="w-full sm:w-1/2 p-6">
        {/* Back Button + Heading */}
        <div className="flex items-center space-x-2">
          <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            onClick={() => router.back()}
          />
          <h1 className="text-2xl font-bold">
            Final Touch: Let’s Talk Numbers
          </h1>
        </div>
        <Progress percent={30} size="small" className="mb-4" showInfo={false} />
        <p className="text-gray-600 mt-2">
          Let’s get real, AI this powerful does not price itself.
        </p>
        <div className="mt-6 space-y-6">
          {/* Budget Selection */}
          <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="font-semibold">
              What is your budget for AI automation?
            </h2>
            <div className="flex justify-between items-center mt-4">
              {["< $500/month", "$500-$1K/month", "$1K-$2.5K/month"].map(
                (option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Switch
                      checked={talkFormData.budget === option}
                      onChange={() => handleSwitchChange("budget", option)}
                    />
                    <span className="text-sm">{option}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Team Size */}
          <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="font-semibold">How many people are on your team?</h2>
            <div className="flex justify-between items-center mt-4">
              {["1-5", "6-10", "11-50"].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Switch
                    checked={talkFormData.teamSize === option}
                    onChange={() => handleSwitchChange("teamSize", option)}
                  />
                  <span className="text-sm">{option}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Leads Managed Daily */}
          <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="font-semibold">
              How many leads are you managing daily?
            </h2>
            <div className="flex justify-between items-center mt-4">
              {["< 15/day", "15-50/day", "50-100/day"].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Switch
                    checked={talkFormData.leads === option}
                    onChange={() => handleSwitchChange("leads", option)}
                  />
                  <span className="text-sm">{option}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Distribution */}
          <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="font-semibold">
              How would you like leads to be divided?
            </h2>
            <div className="flex justify-between items-center mt-4">
              {["Evenly", "Expertise or Region", "Manual"].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Switch
                    checked={talkFormData.leadDistribution === option}
                    onChange={() =>
                      handleSwitchChange("leadDistribution", option)
                    }
                  />
                  <span className="text-sm">{option}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Biggest Challenge */}
          <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="font-semibold">
              What is your team’s biggest challenge right now?
            </h2>
            <div className="flex justify-between items-center mt-4">
              {["No automation", "Slow follow ups", "Too many leads"].map(
                (option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Switch
                      checked={talkFormData.challenge === option}
                      onChange={() => handleSwitchChange("challenge", option)}
                    />
                    <span className="text-sm">{option}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Additional Input */}
          <textarea
            placeholder="Make it perfect, what else should we know?"
            className="w-full mt-4 p-3 border rounded-lg"
            value={talkFormData.additionalInfo}
            onChange={handleTextareaChange}
          ></textarea>

          <div className="flex justify-end mt-6">
            <Button
              type="primary"
              className="w-48 h-10 mt-6 py-2 text-lg rounded-2xl"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="w-full sm:w-1/2 h-full flex items-center justify-center mt-6 sm:mt-0">
        <img
          src="/images/Picture2.jpg"
          alt="Drew Image"
          className="h-auto w-4/5 sm:w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
