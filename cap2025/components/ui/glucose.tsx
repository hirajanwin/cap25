'use client';

import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { DropdownIcon } from '../icons/dropdown-icon';
import { UpArrowIcon } from '../icons/up-arrow-icon';

interface GlucoseProps {
  metrics?: {
    cgm1d: {
      d0: number;
      current: {
        value: number;
        percentage: number;
      };
    };
    cgm5d: {
      d0: number;
      current: {
        value: number;
        percentage: number;
      };
    };
  };
}

function GlucoseRow({
  label,
  d0,
  current,
}: {
  label: string;
  d0: number;
  current: {
    value: number;
    percentage: number;
  };
}) {
  return (
    <div className="self-stretch w-full justify-between items-start inline-flex">
      <div className="w-1/3 flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="self-stretch h-5 text-[#0f1728] text-base font-normal font-['Söhne'] leading-tight">
          {label}
        </div>
      </div>
      <div className="w-1/3 flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="self-stretch h-5 text-right text-[#0f1728] text-base font-medium font-['SöhneMono'] leading-tight">
          {d0}
        </div>
      </div>
      <div className="w-1/3 h-5 justify-end items-center gap-2 flex">
        <div className="px-1 bg-[#ecfcf2] rounded-2xl border border-[#aaefc6] justify-start items-center gap-1 flex">
          <UpArrowIcon />
          <div className="text-center text-[#057647] text-sm font-medium font-['SöhneMono'] leading-tight">
            {current.percentage}%
          </div>
        </div>
        <div className="text-right text-[#0f1728] text-base font-medium font-['SöhneMono'] leading-tight">
          {current.value}
        </div>
      </div>
    </div>
  );
}

export function Glucose({
  metrics = {
    cgm1d: {
      d0: 240,
      current: {
        value: 120,
        percentage: 88,
      },
    },
    cgm5d: {
      d0: 280,
      current: {
        value: 140,
        percentage: 88,
      },
    },
  },
}: GlucoseProps) {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item value="glucose" className="border-0 flex w-full">
        <div className="h-fit p-3 bg-white rounded-[24px] data-[state=open]:rounded-2xl flex-col justify-start items-start gap-3 inline-flex w-full">
          <Accordion.Trigger className="hover:no-underline p-0 w-full group">
            <div className="self-stretch justify-start items-center gap-2 inline-flex w-full">
              <div className="grow shrink basis-0 text-[#555a83] text-base font-semibold font-inter leading-none text-left">
                Glucose
              </div>
              <div className="transform transition-transform duration-200 group-data-[state=closed]:rotate-180">
                <DropdownIcon />
              </div>
            </div>
          </Accordion.Trigger>

          <Accordion.Content className="w-full">
            <div className="flex-col justify-start items-start gap-2 flex w-full">
              {/* Header Row */}
              <div className="self-stretch w-full justify-between items-start inline-flex">
                <div className="w-1/3 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch h-5 text-[#475467] text-sm font-normal font-['Söhne'] leading-tight">
                    Data
                  </div>
                </div>
                <div className="w-1/3 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch h-5 text-right text-[#475467] text-sm font-normal font-['Söhne'] leading-tight">
                    D0
                  </div>
                </div>
                <div className="w-1/3 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch h-5 text-right text-[#475467] text-sm font-normal font-['Söhne'] leading-tight">
                    Current
                  </div>
                </div>
              </div>

              {/* Metric Rows */}
              <GlucoseRow
                label="CGM 1D"
                d0={metrics.cgm1d.d0}
                current={metrics.cgm1d.current}
              />
              <GlucoseRow
                label="CGM 5D"
                d0={metrics.cgm5d.d0}
                current={metrics.cgm5d.current}
              />
            </div>
          </Accordion.Content>
        </div>
      </Accordion.Item>
    </Accordion.Root>
  );
}
