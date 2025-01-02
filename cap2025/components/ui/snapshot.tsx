'use client';

import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { DropdownIcon } from '../icons/dropdown-icon';
import Image from 'next/image';

interface SnapshotCardProps {
  name?: string;
  id?: string;
  age?: string;
  gender?: string;
  score?: string;
  status?: {
    label: string;
    color: string;
    bgColor: string;
    borderColor: string;
  };
  tags?: string[];
  metrics?: {
    efficacy: number;
    sentiment: number;
    adoption: number;
  };
  description?: string;
  defaultOpen?: boolean;
}

function MetricBox({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
      <div className="text-[#475466] text-sm font-medium font-inter">
        {label}
      </div>
      <div
        className="text-2xl font-['SöhneMono']"
        style={{ color }}
      >
        {value}
      </div>
    </div>
  );
}

export function Snapshot({
  name = "John Doe",
  id = "#1111111",
  age = "33y",
  gender = "M",
  score = "D 80",
  status = {
    label: "On track",
    color: "#057647",
    bgColor: "#ecfcf2",
    borderColor: "#aaefc6",
  },
  tags = ["Diabetes", "No Prediction", "MRT v5"],
  metrics = {
    efficacy: 40,
    sentiment: 64,
    adoption: 88,
  },
  description = "Sarah is struggling with her Dexcom app working with her phone. This is why she hasn't been wearing her sensor.\nOther adherence like logging, activity, weight, meds are all going great otherwise.\nHer sentiment is only brought down by the stress from her CGM issues.\nShe has a zendesk ticket to troubleshoot her phone.",
  defaultOpen = false,
}: SnapshotCardProps) {
  return (
    <Accordion.Root type="single" defaultValue={defaultOpen ? "snapshot" : undefined} className="w-full">
      <Accordion.Item value="snapshot" className="border-0 flex">
        <div className="h-fit p-3 bg-white rounded-[24px] data-[state=open]:rounded-2xl flex-col justify-start items-start gap-3 inline-flex w-full">
          <Accordion.Trigger className="hover:no-underline p-0 w-full group">
            <div className="self-stretch justify-start items-center gap-2 inline-flex w-full">
              <div className="grow shrink basis-0 text-[#555a83] text-base font-semibold font-inter leading-none text-left">
                Snapshot
              </div>
              <div className="transform transition-transform duration-200 group-data-[state=closed]:rotate-180">
                <DropdownIcon />
              </div>
            </div>
          </Accordion.Trigger>

          <Accordion.Content>
            <div className="flex-col justify-center items-start gap-3 flex w-full">
              <div className="flex-col justify-center items-start gap-1 flex w-full">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-start items-baseline gap-3 flex">
                    <div className="text-[#0f1728] text-lg font-semibold font-inter">
                      {name}
                    </div>
                    <div className="text-[#475466] text-xs font-medium font-['Söhne Mono'] leading-tight">
                      {id}
                    </div>
                  </div>
                </div>
                <div className="justify-start items-start gap-2.5 inline-flex">
                  <div className="text-[#0f1728] text-sm font-medium font-inter leading-tight">
                    {age}
                  </div>
                  <div className="text-[#0f1728] text-sm font-medium font-inter leading-tight">
                    ·
                  </div>
                  <div className="text-[#0f1728] text-sm font-medium font-inter leading-tight">
                    {gender}
                  </div>
                  <div className="text-[#0f1728] text-sm font-medium font-inter leading-tight">
                    ·
                  </div>
                  <div className="text-[#0f1728] text-sm font-medium font-inter leading-tight">
                    {score}
                  </div>
                  <div className="text-[#0f1728] text-sm font-medium font-inter leading-tight">
                    ·
                  </div>
                  <div
                    className={`pl-1.5 pr-2 py-0.5 rounded-2xl border justify-start items-center gap-1 flex`}
                    style={{
                      backgroundColor: status.bgColor,
                      borderColor: status.borderColor,
                    }}
                  >
                    <div className="w-2 h-2 p-px justify-center items-center flex">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: status.color }}
                      />
                    </div>
                    <div
                      className="text-center text-xs font-medium font-inter leading-none"
                      style={{ color: status.color }}
                    >
                      {status.label}
                    </div>
                  </div>
                </div>
                <div className="justify-end items-start gap-1 inline-flex flex-wrap pt-1">
                  {tags.map((tag, i) => (
                    <React.Fragment key={tag}>
                      <div className="text-center text-[#344053] text-sm font-medium font-inter leading-none">
                        {tag}
                      </div>
                      {i < tags.length - 1 && (
                        <div className="text-center text-[#344053] text-xs font-medium font-inter leading-none">
                          ·
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="self-stretch justify-center items-center gap-4 inline-flex">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=96&h=96&fit=crop&crop=faces"
                    alt="Profile"
                    width={48}
                    height={48}
                    className="aspect-square h-full w-full"
                  />
                </span>
                <MetricBox
                  label="Efficacy"
                  value={metrics.efficacy}
                  color="#ad2576"
                />
                <MetricBox
                  label="Sentiment"
                  value={metrics.sentiment}
                  color="#fb5d5d"
                />
                <MetricBox
                  label="Adoption"
                  value={metrics.adoption}
                  color="#0b5464"
                />
              </div>

              <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <ul className="self-stretch text-[#101828] text-base font-normal font-['Söhne'] list-disc pl-4 space-y-2">
                  {description.split("\n").map((line, index) => (
                    <li
                      key={index}
                      className="text-[#101828] text-base font-normal font-['Söhne']"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Accordion.Content>
        </div>
      </Accordion.Item>
    </Accordion.Root>
  );
}
