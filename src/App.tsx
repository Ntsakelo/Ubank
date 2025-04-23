import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import SavingsAccount from './screens/SavingsAccounts';
import SavingsProduct from './screens/SavingsProduct';
import InvestmentProduct from './screens/InvestmentProduct';
import PersonalInfo from './screens/Apply/BankAccount/PersonalInfo';
import EmploymentInfo from './screens/Apply/BankAccount/EmploymentInfo';
import AccountPreference from './screens/Apply/BankAccount/AccountPreference';
import TermsConditions from './screens/Apply/BankAccount/Terms&Conditions';
import CreditPersonalInfo from './screens/Apply/CreditAccount/CreditPersonalInfo';
import CreditAccountPreference from './screens/Apply/CreditAccount/CreditAccountPreference';
import CreditAccountEmploymentInfo from './screens/Apply/CreditAccount/CreditAccountEmploymentInfo';
import CreditAccountTermsConditions from './screens/Apply/CreditAccount/CreditAccountTermsConditions';
import LoanPersonalInfo from './screens/Apply/Loan/LoanPersonalInfo';
import LoanEmploymentInfo from './screens/Apply/Loan/LoanEmploymentInfo';
import LoanTermsConditions from './screens/Apply/Loan/LoanTermsConditions';
import CreditAccounts from './screens/CreditAccounts';
import InvestmentAccounts from './screens/InvestmentAccounts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/personal/products-and-services/bank-accounts" element={<SavingsAccount />} />
        <Route path="/personal/products-and-services/credit-cards" element={<CreditAccounts />} />
        <Route path="/personal/products-and-services/investment-savings-accounts" element={<InvestmentAccounts />} />
        <Route path="/personal/products-and-services/bank-accounts/:account_name" element={<SavingsProduct />} />
        <Route path="/personal/products-and-services/investment-accounts/:account_name" element={<InvestmentProduct />} />
        <Route path="/personal/products-and-services/bank-accounts/:account_name/apply">
          <Route path="/personal/products-and-services/bank-accounts/:account_name/apply/personal" element={<PersonalInfo />} />
          <Route path="/personal/products-and-services/bank-accounts/:account_name/apply/employment" element={<EmploymentInfo />} />
          <Route path="/personal/products-and-services/bank-accounts/:account_name/apply/account-preference" element={<AccountPreference />} />
          <Route path="/personal/products-and-services/bank-accounts/:account_name/apply/terms-and-conditions" element={<TermsConditions />} />
        </Route>
        <Route path="/personal/products-and-services/credit-accounts/:account_name/apply">
          <Route path="/personal/products-and-services/credit-accounts/:account_name/apply/personal" element={<CreditPersonalInfo />} />
          <Route path="/personal/products-and-services/credit-accounts/:account_name/apply/account-preference" element={<CreditAccountPreference />} />
          <Route path="/personal/products-and-services/credit-accounts/:account_name/apply/employment" element={<CreditAccountEmploymentInfo />} />
          <Route path="/personal/products-and-services/credit-accounts/:account_name/apply/terms-and-conditions" element={<CreditAccountTermsConditions />} />
        </Route>
        <Route path="/personal/products-and-services/loan/apply">
          <Route path="/personal/products-and-services/loan/apply/personal" element={<LoanPersonalInfo />} />
          <Route path="/personal/products-and-services/loan/apply/employment" element={<LoanEmploymentInfo />} />
          <Route path="/personal/products-and-services/loan/apply/terms-and-conditions" element={<LoanTermsConditions />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
