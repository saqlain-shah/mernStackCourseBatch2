import React from "react";
import { styled } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";

function Checkout() {
  const { control } = useFormContext();
  const adultFields = useFieldArray({
    control,
    name: "adults",
  }).fields;
  const childrenFields = useFieldArray({
    control,
    name: "children",
  }).fields;
  const infantFields = useFieldArray({
    control,
    name: "infants",
  }).fields;
  const {
    origin,
    destination,
    journeyDate,
    returnDate,
    number_of_adults,
    number_of_children,
    number_of_infants,
    airline,
    cabin,
    basicFare,
    taxes,
    salesCommission,
    discount,
    gender,
    firstName,
    surName,
    date_of_birth,
    email,
    phone,
    pnrNumber,
    ticket,
    issueBy,
    ledger,
    adultFare,
    childFare,
    infantFare,
    grandTotal,
    code,
  } = control._formValues;
  function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }
  return (
    <div id="checkoutTicket">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap\");\n\n*,\n::after,\n::before\n{\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box\n}\n\nhtml\n{\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%\n}\n\nbody\n{\n    margin: 0\n}\n\nmain\n{\n    display: block\n}\n\nh1\n{\n    font-size: 2em;\n    margin: 0.67em 0\n}\n\nhr\n{\n    -webkit-box-sizing: content-box;\n    box-sizing: content-box;\n    height: 0;\n    overflow: visible\n}\n\npre\n{\n    font-family: monospace, monospace;\n    font-size: 1em\n}\n\na\n{\n    background-color: transparent\n}\n\nabbr[title]\n{\n    border-bottom: none;\n    text-decoration: underline;\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted\n}\n\nb,\nstrong\n{\n    font-weight: bolder\n}\n\ncode,\nkbd,\nsamp\n{\n    font-family: monospace, monospace;\n    font-size: 1em\n}\n\nsmall\n{\n    font-size: 80%\n}\n\nsub,\nsup\n{\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline\n}\n\nsub\n{\n    bottom: -0.25em\n}\n\nsup\n{\n    top: -0.5em\n}\n\nimg\n{\n    border-style: none\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea\n{\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    margin: 0\n}\n\nbutton,\ninput\n{\n    overflow: visible\n}\n\nbutton,\nselect\n{\n    text-transform: none\n}\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit']\n{\n    -webkit-appearance: button\n}\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner\n{\n    border-style: none;\n    padding: 0\n}\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring\n{\n    outline: 1px dotted ButtonText\n}\n\nfieldset\n{\n    padding: 0.35em 0.75em 0.625em\n}\n\nlegend\n{\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    color: inherit;\n    display: table;\n    max-width: 100%;\n    padding: 0;\n    white-space: normal\n}\n\nprogress\n{\n    vertical-align: baseline\n}\n\ntextarea\n{\n    overflow: auto\n}\n\n[type='checkbox'],\n[type='radio']\n{\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 0\n}\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button\n{\n    height: auto\n}\n\n[type='search']\n{\n    -webkit-appearance: textfield;\n    outline-offset: -2px\n}\n\n[type='search']::-webkit-search-decoration\n{\n    -webkit-appearance: none\n}\n\n::-webkit-file-upload-button\n{\n    -webkit-appearance: button;\n    font: inherit\n}\n\ndetails\n{\n    display: block\n}\n\nsummary\n{\n    display: list-item\n}\n\ntemplate\n{\n    display: none\n}\n\n[hidden]\n{\n    display: none\n}\n\nbody,\nhtml\n{\n    color: #777;\n    font-family: 'Inter', sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.5em;\n    overflow-x: hidden;\n    background-color: #f5f7ff\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6\n{\n    clear: both;\n    color: #111;\n    padding: 0;\n    margin: 0 0 20px 0;\n    font-weight: 500;\n    line-height: 1.2em\n}\n\nh1\n{\n    font-size: 60px\n}\n\nh2\n{\n    font-size: 48px\n}\n\nh3\n{\n    font-size: 30px\n}\n\nh4\n{\n    font-size: 24px\n}\n\nh5\n{\n    font-size: 18px\n}\n\nh6\n{\n    font-size: 16px\n}\n\np,\ndiv\n{\n    margin-top: 0;\n    line-height: 1.5em\n}\n\np\n{\n    margin-bottom: 15px\n}\n\nul\n{\n    margin: 0 0 25px 0;\n    padding-left: 20px;\n    list-style: square outside none\n}\n\nol\n{\n    padding-left: 20px;\n    margin-bottom: 25px\n}\n\ndfn,\ncite,\nem,\ni\n{\n    font-style: italic\n}\n\nblockquote\n{\n    margin: 0 15px;\n    font-style: italic;\n    font-size: 20px;\n    line-height: 1.6em;\n    margin: 0\n}\n\naddress\n{\n    margin: 0 0 15px\n}\n\nimg\n{\n    border: 0;\n    max-width: 100%;\n    height: auto;\n    vertical-align: middle\n}\n\na\n{\n    color: inherit;\n    text-decoration: none;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease\n}\n\na:hover\n{\n    color: #2ad19d\n}\n\nbutton\n{\n    color: inherit;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease\n}\n\na:hover\n{\n    text-decoration: none;\n    color: inherit\n}\n\ntable\n{\n    width: 100%;\n    caption-side: bottom;\n    border-collapse: collapse\n}\n\nth\n{\n    text-align: left\n}\n\ntd\n{\n    border-top: 1px solid #eaeaea\n}\n\ntd,\nth\n{\n    padding: 10px 15px;\n    line-height: 1.55em\n}\n\ndl\n{\n    margin-bottom: 25px\n}\n\ndl dt\n{\n    font-weight: 600\n}\n\nb,\nstrong\n{\n    font-weight: bold\n}\n\npre\n{\n    color: #777;\n    border: 1px solid #eaeaea;\n    font-size: 18px;\n    padding: 25px;\n    border-radius: 5px\n}\n\nkbd\n{\n    font-size: 100%;\n    background-color: #777;\n    border-radius: 5px\n}\n\n.cs-f10\n{\n    font-size: 10px\n}\n\n.cs-f11\n{\n    font-size: 11px\n}\n\n.cs-f12\n{\n    font-size: 12px\n}\n\n.cs-f13\n{\n    font-size: 13px\n}\n\n.cs-f14\n{\n    font-size: 14px\n}\n\n.cs-f15\n{\n    font-size: 15px\n}\n\n.cs-f16\n{\n    font-size: 16px\n}\n\n.cs-f17\n{\n    font-size: 17px\n}\n\n.cs-f18\n{\n    font-size: 18px\n}\n\n.cs-f19\n{\n    font-size: 19px\n}\n\n.cs-f20\n{\n    font-size: 20px\n}\n\n.cs-f21\n{\n    font-size: 21px\n}\n\n.cs-f22\n{\n    font-size: 22px\n}\n\n.cs-f23\n{\n    font-size: 23px\n}\n\n.cs-f24\n{\n    font-size: 24px\n}\n\n.cs-f25\n{\n    font-size: 25px\n}\n\n.cs-f26\n{\n    font-size: 26px\n}\n\n.cs-f27\n{\n    font-size: 27px\n}\n\n.cs-f28\n{\n    font-size: 28px\n}\n\n.cs-f29\n{\n    font-size: 29px\n}\n\n.cs-light\n{\n    font-weight: 300\n}\n\n.cs-normal\n{\n    font-weight: 400\n}\n\n.cs-medium\n{\n    font-weight: 500\n}\n\n.cs-semi_bold\n{\n    font-weight: 600\n}\n\n.cs-bold\n{\n    font-weight: 700\n}\n\n.cs-m0\n{\n    margin: 0px\n}\n\n.cs-mb0\n{\n    margin-bottom: 0px\n}\n\n.cs-mb1\n{\n    margin-bottom: 1px\n}\n\n.cs-mb2\n{\n    margin-bottom: 2px\n}\n\n.cs-mb3\n{\n    margin-bottom: 3px\n}\n\n.cs-mb4\n{\n    margin-bottom: 4px\n}\n\n.cs-mb5\n{\n    margin-bottom: 5px\n}\n\n.cs-mb6\n{\n    margin-bottom: 6px\n}\n\n.cs-mb7\n{\n    margin-bottom: 7px\n}\n\n.cs-mb8\n{\n    margin-bottom: 8px\n}\n\n.cs-mb9\n{\n    margin-bottom: 9px\n}\n\n.cs-mb10\n{\n    margin-bottom: 10px\n}\n\n.cs-mb11\n{\n    margin-bottom: 11px\n}\n\n.cs-mb12\n{\n    margin-bottom: 12px\n}\n\n.cs-mb13\n{\n    margin-bottom: 13px\n}\n\n.cs-mb14\n{\n    margin-bottom: 14px\n}\n\n.cs-mb15\n{\n    margin-bottom: 15px\n}\n\n.cs-mb16\n{\n    margin-bottom: 16px\n}\n\n.cs-mb17\n{\n    margin-bottom: 17px\n}\n\n.cs-mb18\n{\n    margin-bottom: 18px\n}\n\n.cs-mb19\n{\n    margin-bottom: 19px\n}\n\n.cs-mb20\n{\n    margin-bottom: 20px\n}\n\n.cs-mb21\n{\n    margin-bottom: 21px\n}\n\n.cs-mb22\n{\n    margin-bottom: 22px\n}\n\n.cs-mb23\n{\n    margin-bottom: 23px\n}\n\n.cs-mb24\n{\n    margin-bottom: 24px\n}\n\n.cs-mb25\n{\n    margin-bottom: 25px\n}\n\n.cs-mb26\n{\n    margin-bottom: 26px\n}\n\n.cs-mb27\n{\n    margin-bottom: 27px\n}\n\n.cs-mb28\n{\n    margin-bottom: 28px\n}\n\n.cs-mb29\n{\n    margin-bottom: 29px\n}\n\n.cs-mb30\n{\n    margin-bottom: 30px\n}\n\n.cs-pt25\n{\n    padding-top: 25px\n}\n\n.cs-width_1\n{\n    width: 8.33333333%\n}\n\n.cs-width_2\n{\n    width: 16.66666667%\n}\n\n.cs-width_3\n{\n    width: 25%\n}\n\n.cs-width_4\n{\n    width: 33.33333333%\n}\n\n.cs-width_5\n{\n    width: 41.66666667%\n}\n\n.cs-width_6\n{\n    width: 50%\n}\n\n.cs-width_7\n{\n    width: 58.33333333%\n}\n\n.cs-width_8\n{\n    width: 66.66666667%\n}\n\n.cs-width_9\n{\n    width: 75%\n}\n\n.cs-width_10\n{\n    width: 83.33333333%\n}\n\n.cs-width_11\n{\n    width: 91.66666667%\n}\n\n.cs-width_12\n{\n    width: 100%\n}\n\n.cs-accent_color,\n.cs-accent_color_hover:hover\n{\n    color: #2ad19d\n}\n\n.cs-accent_bg,\n.cs-accent_bg_hover:hover\n{\n    background-color: #2ad19d\n}\n\n.cs-primary_color\n{\n    color: #111\n}\n\n.cs-secondary_color\n{\n    color: #777\n}\n\n.cs-ternary_color\n{\n    color: #353535\n}\n\n.cs-ternary_color\n{\n    border-color: #eaeaea\n}\n\n.cs-focus_bg\n{\n    background: #f6f6f6\n}\n\n.cs-accent_10_bg\n{\n    background-color: rgba(42, 209, 157, 0.1)\n}\n\n.cs-container\n{\n    max-width: 880px;\n    padding: 30px 15px;\n    margin-left: auto;\n    margin-right: auto\n}\n\n.cs-text_center\n{\n    text-align: center\n}\n\n.cs-text_right\n{\n    text-align: right\n}\n\n.cs-border_bottom_0\n{\n    border-bottom: 0\n}\n\n.cs-border_top_0\n{\n    border-top: 0\n}\n\n.cs-border_bottom\n{\n    border-bottom: 1px solid #eaeaea\n}\n\n.cs-border_top\n{\n    border-top: 1px solid #eaeaea\n}\n\n.cs-border_left\n{\n    border-left: 1px solid #eaeaea\n}\n\n.cs-border_right\n{\n    border-right: 1px solid #eaeaea\n}\n\n.cs-table_baseline\n{\n    vertical-align: baseline\n}\n\n.cs-round_border\n{\n    border: 1px solid #eaeaea;\n    overflow: hidden;\n    border-radius: 6px\n}\n\n.cs-border_none\n{\n    border: none\n}\n\n.cs-border_left_none\n{\n    border-left-width: 0\n}\n\n.cs-border_right_none\n{\n    border-right-width: 0\n}\n\n.cs-invoice.cs-style1\n{\n    background: #fff;\n    border-radius: 10px;\n    padding: 50px\n}\n\n.cs-invoice.cs-style1 .cs-invoice_head\n{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between\n}\n\n.cs-invoice.cs-style1 .cs-invoice_head.cs-type1\n{\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n    padding-bottom: 25px;\n    border-bottom: 1px solid #eaeaea\n}\n\n.cs-invoice.cs-style1 .cs-invoice_footer\n{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex\n}\n\n.cs-invoice.cs-style1 .cs-invoice_footer table\n{\n    margin-top: -1px\n}\n\n.cs-invoice.cs-style1 .cs-left_footer\n{\n    width: 55%;\n    padding: 10px 15px\n}\n\n.cs-invoice.cs-style1 .cs-right_footer\n{\n    width: 46%\n}\n\n.cs-invoice.cs-style1 .cs-note\n{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n    margin-top: 40px\n}\n\n.cs-invoice.cs-style1 .cs-note_left\n{\n    margin-right: 10px;\n    margin-top: 6px;\n    margin-left: -5px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex\n}\n\n.cs-invoice.cs-style1 .cs-note_left svg\n{\n    width: 32px\n}\n\n.cs-invoice.cs-style1 .cs-invoice_left\n{\n    max-width: 55%\n}\n\n.cs-invoice_btns\n{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    margin-top: 30px\n}\n\n.cs-invoice_btns .cs-invoice_btn:first-child\n{\n    border-radius: 5px 0 0 5px\n}\n\n.cs-invoice_btns .cs-invoice_btn:last-child\n{\n    border-radius: 0 5px 5px 0\n}\n\n.cs-invoice_btn\n{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    border: none;\n    font-weight: 600;\n    padding: 8px 20px;\n    cursor: pointer\n}\n\n.cs-invoice_btn svg\n{\n    width: 24px;\n    margin-right: 5px\n}\n\n.cs-invoice_btn.cs-color1\n{\n    color: #111;\n    background: rgba(42, 209, 157, 0.15)\n}\n\n.cs-invoice_btn.cs-color1:hover\n{\n    background-color: rgba(42, 209, 157, 0.3)\n}\n\n.cs-invoice_btn.cs-color2\n{\n    color: #fff;\n    background: #2ad19d\n}\n\n.cs-invoice_btn.cs-color2:hover\n{\n    background-color: rgba(42, 209, 157, 0.8)\n}\n\n.cs-table_responsive\n{\n    overflow-x: auto\n}\n\n.cs-table_responsive>table\n{\n    min-width: 600px\n}\n\n.cs-50_col>*\n{\n    width: 50%;\n    -webkit-box-flex: 0;\n    -ms-flex: none;\n    flex: none\n}\n\n.cs-bar_list\n{\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    position: relative\n}\n\n.cs-bar_list::before\n{\n    content: '';\n    height: 75%;\n    width: 2px;\n    position: absolute;\n    left: 4px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    background-color: #eaeaea\n}\n\n.cs-bar_list li\n{\n    position: relative;\n    padding-left: 25px\n}\n\n.cs-bar_list li:before\n{\n    content: '';\n    height: 10px;\n    width: 10px;\n    border-radius: 50%;\n    background-color: #eaeaea;\n    position: absolute;\n    left: 0;\n    top: 6px\n}\n\n.cs-bar_list li:not(:last-child)\n{\n    margin-bottom: 10px\n}\n\n.cs-table.cs-style1.cs-type1\n{\n    padding: 10px 30px\n}\n\n.cs-table.cs-style1.cs-type1 tr:first-child td\n{\n    border-top: none\n}\n\n.cs-table.cs-style1.cs-type1 tr td:first-child\n{\n    padding-left: 0\n}\n\n.cs-table.cs-style1.cs-type1 tr td:last-child\n{\n    padding-right: 0\n}\n\n.cs-table.cs-style1.cs-type2>*\n{\n    padding: 0 10px\n}\n\n.cs-table.cs-style1.cs-type2 .cs-table_title\n{\n    padding: 20px 0 0 15px;\n    margin-bottom: -5px\n}\n\n.cs-table.cs-style2 td\n{\n    border: none\n}\n\n.cs-table.cs-style2 td,\n.cs-table.cs-style2 th\n{\n    padding: 12px 15px;\n    line-height: 1.55em\n}\n\n.cs-table.cs-style2 tr:not(:first-child)\n{\n    border-top: 1px dashed #eaeaea\n}\n\n.cs-list.cs-style1\n{\n    list-style: none;\n    padding: 0;\n    margin: 0\n}\n\n.cs-list.cs-style1 li\n{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex\n}\n\n.cs-list.cs-style1 li:not(:last-child)\n{\n    border-bottom: 1px dashed #eaeaea\n}\n\n.cs-list.cs-style1 li>*\n{\n    -webkit-box-flex: 0;\n    -ms-flex: none;\n    flex: none;\n    width: 50%;\n    padding: 7px 0px\n}\n\n.cs-list.cs-style2\n{\n    list-style: none;\n    margin: 0 0 30px 0;\n    padding: 12px 0;\n    border: 1px solid #eaeaea;\n    border-radius: 5px\n}\n\n.cs-list.cs-style2 li\n{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex\n}\n\n.cs-list.cs-style2 li>*\n{\n    -webkit-box-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    padding: 5px 25px\n}\n\n.cs-heading.cs-style1\n{\n    line-height: 1.5em;\n    border-top: 1px solid #eaeaea;\n    border-bottom: 1px solid #eaeaea;\n    padding: 10px 0\n}\n\n.cs-no_border\n{\n    border: none !important\n}\n\n.cs-grid_row\n{\n    display: -ms-grid;\n    display: grid;\n    grid-gap: 20px;\n    list-style: none;\n    padding: 0\n}\n\n.cs-col_2\n{\n    -ms-grid-columns: (1fr)[2];\n    grid-template-columns: repeat(2, 1fr)\n}\n\n.cs-col_3\n{\n    -ms-grid-columns: (1fr)[3];\n    grid-template-columns: repeat(3, 1fr)\n}\n\n.cs-col_4\n{\n    -ms-grid-columns: (1fr)[4];\n    grid-template-columns: repeat(4, 1fr)\n}\n\n.cs-border_less td\n{\n    border-color: transparent\n}\n\n.cs-special_item\n{\n    position: relative\n}\n\n.cs-special_item:after\n{\n    content: '';\n    height: 52px;\n    width: 1px;\n    background-color: #eaeaea;\n    position: absolute;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    right: 0\n}\n\n.cs-table.cs-style1 .cs-table.cs-style1 tr:not(:first-child) td\n{\n    border-color: #eaeaea\n}\n\n.cs-table.cs-style1 .cs-table.cs-style2 td\n{\n    padding: 12px 0px\n}\n\n.cs-ticket_wrap\n{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex\n}\n\n.cs-ticket_left\n{\n    -webkit-box-flex: 1;\n    -ms-flex: 1;\n    flex: 1\n}\n\n.cs-ticket_right\n{\n    -webkit-box-flex: 0;\n    -ms-flex: none;\n    flex: none;\n    width: 215px\n}\n\n.cs-box.cs-style1\n{\n    border: 2px solid #eaeaea;\n    border-radius: 5px;\n    padding: 20px 10px;\n    min-width: 150px\n}\n\n.cs-box.cs-style1.cs-type1\n{\n    padding: 12px 10px 10px\n}\n\n.cs-max_w_150\n{\n    max-width: 150px\n}\n\n.cs-left_auto\n{\n    margin-left: auto\n}\n\n.cs-title_1\n{\n    display: inline-block;\n    border-bottom: 1px solid #eaeaea;\n    min-width: 60%;\n    padding-bottom: 5px;\n    margin-bottom: 10px\n}\n\n.cs-box2_wrap\n{\n    display: -ms-grid;\n    display: grid;\n    grid-gap: 30px;\n    list-style: none;\n    padding: 0;\n    -ms-grid-columns: (1fr)[2];\n    grid-template-columns: repeat(2, 1fr)\n}\n\n.cs-box.cs-style2\n{\n    border: 1px solid #eaeaea;\n    padding: 25px 30px;\n    border-radius: 5px\n}\n\n.cs-box.cs-style2 .cs-table.cs-style2 td\n{\n    padding: 12px 0\n}\n\n@media print\n{\n    .cs-hide_print\n    {\n        display: none !important\n    }\n}\n\n@media (max-width: 767px)\n{\n    .cs-mobile_hide\n    {\n        display: none\n    }\n\n    .cs-invoice.cs-style1\n    {\n        padding: 30px 20px\n    }\n\n    .cs-invoice.cs-style1 .cs-right_footer\n    {\n        width: 100%\n    }\n}\n\n@media (max-width: 500px)\n{\n    .cs-invoice.cs-style1 .cs-logo\n    {\n        margin-bottom: 10px\n    }\n\n    .cs-invoice.cs-style1 .cs-invoice_head\n    {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n        flex-direction: column\n    }\n\n    .cs-invoice.cs-style1 .cs-invoice_head.cs-type1\n    {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        text-align: center\n    }\n\n    .cs-invoice.cs-style1 .cs-invoice_head .cs-text_right\n    {\n        text-align: left\n    }\n\n    .cs-list.cs-style2 li\n    {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n        flex-direction: column\n    }\n\n    .cs-list.cs-style2 li>*\n    {\n        padding: 5px 20px\n    }\n\n    .cs-grid_row\n    {\n        grid-gap: 0px\n    }\n\n    .cs-col_2,\n    .cs-col_3,\n    .cs-col_4\n    {\n        -ms-grid-columns: (1fr)[1];\n        grid-template-columns: repeat(1, 1fr)\n    }\n\n    .cs-table.cs-style1.cs-type1\n    {\n        padding: 0px 20px\n    }\n\n    .cs-box2_wrap\n    {\n        -ms-grid-columns: (1fr)[1];\n        grid-template-columns: repeat(1, 1fr)\n    }\n\n    .cs-box.cs-style1.cs-type1\n    {\n        max-width: 100%;\n        width: 100%\n    }\n\n    .cs-invoice.cs-style1 .cs-invoice_left\n    {\n        max-width: 100%\n    }\n}\n\n",
        }}
      />
      <div className="cs-container">
        <div className="cs-invoice cs-style1">
          <div className="cs-invoice_in" id="download_section">
            <div className="cs-invoice_head cs-type1 cs-mb25">
              <div className="cs-invoice_left">
                <p className="cs-invoice_number cs-primary_color cs-mb0 cs-f16">
                  <b className="cs-primary_color">PNR No:</b> {pnrNumber}
                </p>
              </div>
              <div className="cs-invoice_right cs-text_right">
                <div className="cs-logo cs-mb5">
                  <h1>
                    <b>RINOR.PK</b>
                  </h1>
                  {/*1*/}
                </div>
              </div>
            </div>
          </div>
          <div className="cs-table cs-style1">
            <div className="cs-round_border">
              <div className="cs-table_responsive">
                <table>
                  <thead>
                    <tr>
                      <th
                        className="cs-width_6 cs-semi_bold cs-primary_color cs-focus_bg cs-f16"
                        colSpan={2}
                      >
                        Ticket Information
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="cs-width_6">
                        <b className="cs-primary_color">Airline: {airline}</b>{" "}
                      </td>
                      <td className="cs-width_6">
                        <b className="cs-primary_color">Airline Code: {code}</b>
                      </td>
                    </tr>
                    <tr>
                      <td className="cs-width_6">
                        <b className="cs-primary_color">PNR: {pnrNumber} </b>
                      </td>
                      <td className="cs-width_6">
                        <b className="cs-primary_color">Ticket No: {ticket}</b>
                      </td>
                    </tr>
                    <tr>
                      <td className="cs-width_6">
                        <b className="cs-primary_color">Issued Date: </b>
                        {"{"}issuedDate{"}"}
                      </td>
                      <td className="cs-width_6">
                        <b className="cs-primary_color">
                          Departure Date: {journeyDate}
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td className="cs-width_6">
                        <b className="cs-primary_color">
                          Issued By: {issueBy}{" "}
                        </b>
                      </td>
                      <td className="cs-width_6">
                        <b className="cs-primary_color">Ledger: {ledger} </b>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <thead>
                    <tr>
                      <th
                        className="cs-semi_bold cs-primary_color cs-focus_bg cs-f16 cs-border_top"
                        colSpan={4}
                      >
                        Passenger Information
                      </th>
                    </tr>
                    <tr>
                      <td className="cs-width_3 cs-primary_color cs-semi_bold">
                        Adults
                      </td>
                      <td className="cs-width_3 cs-primary_color cs-semi_bold">
                        Children
                      </td>
                      <td className="cs-width_3 cs-primary_color cs-semi_bold">
                        Infants
                      </td>
                      <td className="cs-width_3 cs-primary_color cs-semi_bold cs-text_right">
                        Total Travelers
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="cs-width_3 cs-primary_color ">
                        {number_of_adults}
                      </td>
                      <td className="cs-width_3 cs-primary_color ">
                        {number_of_children}
                      </td>
                      <td className="cs-width_3 cs-primary_color ">
                        {number_of_infants}{" "}
                      </td>
                      <td className="cs-width_3 cs-primary_color cs-text_right">
                        {number_of_infants +
                          number_of_children +
                          number_of_adults}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <thead>
                    <tr>
                      <th
                        className="cs-width_6 cs-bold cs-primary_color cs-focus_bg cs-f16 cs-border_top"
                        colSpan={5}
                      >
                        Passenger Details
                      </th>
                    </tr>
                    <tr className=" cs-border_top">
                      <th className="cs-width_2 cs-semi_bold cs-primary_color">
                        First Name
                      </th>
                      <th className="cs-width_2 cs-semi_bold cs-primary_color">
                        Surname
                      </th>
                      <th className="cs-width_2 cs-semi_bold cs-primary_color">
                        Gender
                      </th>
                      <th className="cs-width_2 cs-semi_bold cs-primary_color">
                        Date of Birth
                      </th>
                      <th className="cs-width_2 cs-semi_bold cs-primary_color">
                        Ticket No:
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {adultFields.map((field, index) => (
                      <tr key={index} className=" cs-border_top">
                        <td className="cs-width_2 cs-primary_color">
                          {field.firstName}
                        </td>
                        <td className="cs-width_2 cs-primary_color">
                          {field.surname}
                        </td>
                        <td className="cs-width_2 cs-primary_color">
                          {field.gender}
                        </td>
                        <td className="cs-width_2 cs-primary_color">
                          {field.date_of_birth}
                        </td>
                        <td className="cs-width_2 cs-primary_color">
                          {field.phoneNumber}
                        </td>
                      </tr>
                    ))}
                    {childrenFields.map((field, index) => (
                      <tr key={index} className=" cs-border_top">
                        <td className="cs-width_2 cs-primary_color">
                          {field.firstName}
                        </td>
                        <td className="cs-width_2 cs-primary_color">
                          {field.surname}
                        </td>
                        <td className="cs-width_2 cs-primary_color">
                          {field.gender}
                        </td>
                        <td className="cs-width_1 cs-primary_color">
                          {field.date_of_birth}
                        </td>
                      </tr>
                    ))}
                    {infantFields.map((field, index) => (
                      <tr key={index} className=" cs-border_top">
                        <td className="cs-width_2 cs-primary_color">
                          {field.firstName}
                        </td>
                        <td className="cs-width_2 cs-primary_color">
                          {field.surname}
                        </td>
                        <td className="cs-width_2 cs-primary_color">
                          {field.gender}
                        </td>
                        <td className="cs-width_1 cs-primary_color">
                          {field.date_of_birth}
                        </td>{" "}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th
                    className="cs-width_6 cs-semi_bold cs-primary_color cs-focus_bg cs-f16 cs-border_top"
                    colSpan={5}
                  >
                    Passenger Flight Details
                  </th>
                </tr>
                <tr className=" cs-border_top">
                  <th className="cs-width_10 cs-semi_bold cs-primary_color">
                    Passenger
                  </th>
                  <th className="cs-width_2 cs-semi_bold cs-primary_color">
                    Base Fare
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {adultFields.map((field, index) => (
                    <td className="cs-width_2 cs-primary_color">
                      {field.gender === "male" ? "Mr. " : "Ms."}
                      {field.firstName} {field.surname}
                    </td>
                  ))}

                  {adultFields.map((field, index) => (
                    <td className="cs-width_2 cs-primary_color">
                      PKR. {adultFare}{" "}
                    </td>
                  ))}
                </tr>
                <tr>
                  {childrenFields.map((field, index) => (
                    <td className="cs-width_2 cs-primary_color">
                      {field.gender === "male" ? "Mr. " : "Ms."}
                      {field.firstName} {field.surname}
                    </td>
                  ))}

                  {childrenFields.map((field, index) => (
                    <td className="cs-width_2 cs-primary_color">
                      PKR. {childFare}{" "}
                    </td>
                  ))}
                </tr>
                <tr>
                  {infantFields.map((field, index) => (
                    <td className="cs-width_2 cs-primary_color">
                      {field.gender === "male" ? "Mr. " : "Ms."}
                      {field.firstName} {field.surname}
                    </td>
                  ))}

                  {infantFields.map((field, index) => (
                    <td className="cs-width_2 cs-primary_color">
                      PKR. {infantFare}{" "}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <td className="cs-width_2 cs-primary_color cs-semi_bold">
                    Sales Commission:
                  </td>
                  <td className="cs-width_2 cs-primary_color cs-semi_bold">
                    Discount:
                  </td>
                  <td className="cs-width_3 cs-primary_color cs-semi_bold">
                    Taxes:
                  </td>
                  <td className="cs-width_4 cs-primary_color cs-semi_bold cs-text_right">
                    Total Amount
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="cs-width_8 cs-primary_color">
                    {salesCommission}%{" "}
                  </td>
                  <td className="cs-width_8 cs-primary_color">{discount}% </td>
                  <td className="cs-width_8 cs-primary_color">{taxes}%</td>
                  <td className="cs-width_8 cs-primary_color cs-semi_bold cs-text_right">
                    {grandTotal}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cs-note">
            <div className="cs-note_left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth={32}
                />
                <path
                  d="M256 56v120a32 32 0 0032 32h120M176 288h160M176 368h160"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                />
              </svg>
            </div>
            <div className="cs-note_right">
              <p className="cs-mb0">
                <b className="cs-primary_color cs-bold">Cancellation:</b>
              </p>
              <hr />
              <p className="cs-m0 cs-primary_color">
                Cancellation Fee = Airline's Fee + Rinor Fee
              </p>
              <p className="cs-mb0 cs-primary_color">
                <b className="cs-primary_color cs-bold">Refund:</b>
              </p>
              <hr />
              <p className="cs-m0 cs-primary_color">
                Refund Amount = Paid Amount - Cancellation Fee
              </p>
              <p className="cs-mb0 cs-primary_color">
                <b className="cs-primary_color cs-bold">Re issue:</b>
              </p>
              <hr />
              <p className="cs-m0 cs-primary_color">
                Cancellation Fee = Airline's Fee + Rinor Fee Refund Amount =
                Paid Amount - Cancellation Fee.
              </p>
            </div>
          </div>
        </div>
        {/* .cs-note */}
      </div>
      <div className="cs-invoice_btns cs-hide_print">
        <Button
          className="cs-invoice_btn cs-color1"
          onClick={() => printDiv("checkoutTicket")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <path
              d="M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth={32}
            />
            <rect
              x={128}
              y={240}
              width={256}
              height={208}
              rx="24.32"
              ry="24.32"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth={32}
            />
            <path
              d="M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth={32}
            />
            <circle cx={392} cy={184} r={24} />
          </svg>
          <span>Print</span>
        </Button>{" "}
        <button id="download_btn" className="cs-invoice_btn cs-color2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Download</title>
            <path
              d="M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M176 272l80 80 80-80M256 48v288"
            />
          </svg>
          <span>Download</span>
        </button>
      </div>
    </div>
  );
}

export default Checkout;
