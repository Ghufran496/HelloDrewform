"use client";
import { Switch, Button, Progress } from "antd";
import { useRouter } from "next/navigation";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function TalkPage() {
  const router = useRouter();

  const handlesubmit = () => {
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
        {/* Progress Bar (30% Completion) */}
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
            <div className="flex flex-col sm:flex-row gap-2 justify-between items-center mt-2">
              <div className="flex items-center justify-center space-x-2">
                <Switch />
                <span className="text-sm">&lt; $500/month</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Switch />
                <span className="text-sm">$500-$1K/month</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Switch />
                <span className="text-sm">$1K-$2.5K/month</span>
              </div>
            </div>
          </div>

          {/* Team Size */}
          <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="font-semibold">How many people are on your team?</h2>
            <div className="flex flex-col sm:flex-row gap-2 justify-between items-center mt-2">
              <div className="flex items-center justify-center space-x-2">
                <Switch />
                <span className="text-sm">1-5</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Switch />
                <span className="text-sm">6-10</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Switch />
                <span className="text-sm">11-50</span>
              </div>
            </div>
          </div>

          {/* Leads Management */}
          <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="font-semibold">
              How many leads are you managing daily?
            </h2>
            <div className="flex flex-col sm:flex-row gap-2 justify-between items-center mt-2">
              <div className="flex items-center justify-center space-x-2">
                <Switch />
                <span className="text-sm">&lt; 15/day</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Switch />
                <span className="text-sm">15-50/day</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Switch />
                <span className="text-sm">50-100/day</span>
              </div>
            </div>
          </div>

          {/* Lead Distribution */}
          <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="font-semibold">
              How would you like leads to be divided?
            </h2>
            <div className="flex flex-col sm:flex-row gap-2 justify-between items-center mt-2">
              <div className="flex items-center justify-center space-x-2">
                <Switch />
                <span className="text-sm">Evenly</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Switch />
                <span className="text-sm">Expertise or Region</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Switch />
                <span className="text-sm">Manual</span>
              </div>
            </div>
          </div>

          {/* Biggest Challenge */}
          <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="font-semibold">
              What is your team’s biggest challenge right now?
            </h2>
            <div className="flex flex-col sm:flex-row gap-2 justify-between items-center mt-2">
              <div className="flex items-center justify-center space-x-2">
                <Switch />
                <span className="text-sm">No automation</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Switch />
                <span className="text-sm">Slow follow ups</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Switch />
                <span className="text-sm">Too many leads</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Input */}
        <textarea
          placeholder="Make it perfect, what else should we know?"
          className="w-full mt-4 p-3 border rounded-lg"
        ></textarea>

        <div className="flex justify-end mt-6">
          <Button
            type="primary"
            className="w-48 h-10 mt-6 py-2 text-lg rounded-2xl"
            onClick={handlesubmit}
          >
            Submit
          </Button>
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
