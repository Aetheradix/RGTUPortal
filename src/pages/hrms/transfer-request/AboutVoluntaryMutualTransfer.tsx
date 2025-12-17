import PageLayout from '../../../components/PageLayout';

const AboutVoluntaryMutualTransfer: React.FC = () => {
  return (
    <PageLayout title="About Voluntary and Mutual Transfer">
      <div className="space-y-4 text-gray-700">
        <p>
          This section explains the process and rules for <strong>Voluntary</strong> and <strong>Mutual</strong> transfer
          of employees. Actual business rules will be integrated here later.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Voluntary transfer – initiated by an employee based on preference.</li>
          <li>Mutual transfer – swap of posting between two employees with mutual consent.</li>
          <li>All transfers are subject to department approval and policy constraints.</li>
        </ul>
      </div>
    </PageLayout>
  );
};

export default AboutVoluntaryMutualTransfer;
