"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Loader2, FileText, Plus, TrendingUp, Trash2 } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";
import { formatDate, getSpinnerColor } from "@/lib/status-utils";
import { useState } from "react";
import { Id } from "@/convex/_generated/dataModel";

const ReportsTable = () => {
  return (
    <div className="w-full">
      <div className="rounded-lg border bg-card/50 backdrop-blur-sm">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border/50">
              <TableHead className="font-semibold text-foreground">
                Report
              </TableHead>
              <TableHead className="font-semibold text-foreground">
                Status
              </TableHead>
              <TableHead className="font-semibold text-foreground">
                Created
              </TableHead>
              <TableHead className="font-semibold text-foreground">
                Completed
              </TableHead>
              <TableHead className="font-semibold text-foreground w-20">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </div>
    </div>
  );
};
export default ReportsTable;
