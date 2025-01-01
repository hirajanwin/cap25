'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { DropdownIcon } from '../icons/dropdown-icon';
import { UpArrowIcon } from '../icons/up-arrow-icon';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MedicationChanges() {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item value="medication-changes" className="border-0 flex w-full">
        <div className="h-fit p-3 bg-white rounded-[24px] data-[state=open]:rounded-2xl flex-col justify-start items-start gap-3 inline-flex w-full">
          <Accordion.Trigger className="hover:no-underline p-0 w-full group">
            <div className="self-stretch justify-start items-center gap-2 inline-flex w-full">
              <div className="grow shrink basis-0 text-[#555a83] text-base font-semibold font-['Söhne'] leading-none text-left">
                Medication Changes
              </div>
              <div className="transform transition-transform duration-200 group-data-[state=closed]:rotate-180">
                <DropdownIcon />
              </div>
            </div>
          </Accordion.Trigger>

          <Accordion.Content className="w-full">
            <div className="flex-col justify-start items-start gap-2 flex w-full">
              {/* Headers */}
              <div className="self-stretch justify-between items-start inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch h-5 text-[#475467] text-sm font-normal font-['Söhne'] leading-tight">
                    Data
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch h-5 text-right text-[#475467] text-sm font-normal font-['Söhne'] leading-tight">
                    D0
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch h-5 text-right text-[#475467] text-sm font-normal font-['Söhne'] leading-tight">
                    Current
                  </div>
                </div>
              </div>

              {/* Atirovastidin */}
              <div className="self-stretch justify-between items-start inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="text-[#0f1728] text-base font-normal font-['Söhne'] leading-tight">
                    Atirovastidin
                  </div>
                </div>
                <div className="h-5 justify-end items-center gap-2 flex">
                  <div className="text-right text-[#0f1728] text-base font-medium font-['SöhneMono'] leading-tight">
                    2
                  </div>
                  <div className="w-14 flex-col justify-start items-end gap-2 inline-flex">
                    <div className="px-1 bg-[#ecfcf2] rounded-2xl border border-[#aaefc6] justify-end items-center gap-1 inline-flex">
                      <UpArrowIcon />
                      <div className="text-center text-[#057647] text-sm font-medium font-['SöhneMono'] leading-tight">
                        50%
                      </div>
                    </div>
                  </div>
                  <div className="w-8 text-right text-[#0f1728] text-base font-medium font-['SöhneMono'] leading-tight">
                    1
                  </div>
                </div>
              </div>

              {/* Thyronorm */}
              <div className="self-stretch justify-between items-start inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="text-[#0f1728] text-base font-normal font-['Söhne'] leading-tight">
                    Thyronorm
                  </div>
                </div>
                <div className="h-5 justify-end items-center gap-2 flex">
                  <div className="text-right text-[#0f1728] text-base font-medium font-['SöhneMono'] leading-tight">
                    1
                  </div>
                  <div className="w-14 flex-col justify-start items-end gap-2 inline-flex">
                    <div className="px-1 bg-[#ecfcf2] rounded-2xl border border-[#aaefc6] justify-end items-center gap-1 inline-flex">
                      <UpArrowIcon />
                      <div className="text-center text-[#057647] text-sm font-medium font-['SöhneMono'] leading-tight">
                        100%
                      </div>
                    </div>
                  </div>
                  <div className="w-8 text-right text-[#0f1728] text-base font-medium font-['SöhneMono'] leading-tight">
                    0
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Content>
        </div>
      </Accordion.Item>
    </Accordion.Root>
  );
}
