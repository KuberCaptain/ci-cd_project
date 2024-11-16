import React from 'react';
import { Server, GitBranch, Terminal, Database, Cloud, Code, Infinity } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

export default function SystemsAdmin() {
  const projects = [
    {
      title: "Enterprise Windows Server Management",
      icon: <Server className="w-6 h-6 text-cyan-400" />,
      description: "Comprehensive management and optimization of enterprise Windows Server infrastructure, focusing on high availability, security, and automation.",
      tags: ["Windows Server", "Active Directory", "PowerShell", "Hyper-V", "Azure"],
      metrics: [
        "Experience with Windows Server 2012, 2016, and 2022, including Hyper-V virtualization",
        "Designed and implemented high-availability clusters for minimal downtime",
        "Deep integration with Active Directory and GPO management",
        "Automated tasks using PowerShell for infrastructure management",
        "Configured DNS, DHCP, and network policies for stability",
        "Implemented BCDR strategies using Veeam and Azure Backup",
        "Comprehensive troubleshooting at all infrastructure levels",
        "Managed access control through RADIUS and MFA",
        "Leveraged System Center for monitoring and updates"
      ]
    },
    {
      title: "Linux Infrastructure Management",
      icon: <Terminal className="w-6 h-6 text-cyan-400" />,
      description: "Expert management of Linux environments with focus on automation, security, and performance optimization across multiple platforms.",
      tags: ["Ubuntu", "CentOS", "Ansible", "Terraform", "Docker", "Jenkins"],
      metrics: [
        "Managed Ubuntu and CentOS environments both on-premises and cloud-hosted",
        "Developed automation frameworks using Ansible and Terraform (IaC)",
        "Reduced deployment time from 4 hours to 15 minutes",
        "Standardized configurations across multiple data centers",
        "Implemented Prometheus and Grafana monitoring solutions",
        "Automated maintenance with Bash scripts",
        "Optimized system performance through kernel tuning and resource management",
        "Deployed containerized applications using Docker",
        "Configured networking services (iptables, DNS, DHCP)",
        "Implemented security best practices and access control",
        "Managed CI/CD pipelines with Jenkins integration"
      ]
    },
    {
      title: "CI/CD Pipeline Modernization",
      icon: <Infinity className="w-6 h-6 text-cyan-400 animate-[spin_3s_linear_infinite]" />,
      description: "Designed and implemented modern Continuous Integration/Continuous Deployment (CI/CD) pipelines using GitLab CI and Jenkins to streamline the development lifecycle.",
      tags: ["Jenkins", "GitLab CI", "Docker", "Kubernetes", "ArgoCD"],
      metrics: [
        "Developed and optimized GitLab CI pipelines for automated build, test, and deployment",
        "Integrated Jenkins with Docker for isolated build environments",
        "Adopted Kubernetes for improved scalability and resilience",
        "Implemented ArgoCD for GitOps-based deployment management",
        "Reduced deployment frequency from weekly to daily",
        "Leveraged Docker for consistent deployments across environments",
        "Decreased failed deployments by 75% through automated testing",
        "Achieved zero-downtime deployments with blue-green strategies",
        "Established automated approval gates for production releases",
        "Built automated notification systems via Slack and email",
        "Integrated with Prometheus and Grafana for deployment monitoring",
        "Implemented robust rollback strategies for deployment safety"
      ]
    },
    {
      title: "Cloud Migration & Optimization",
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      description: "Orchestrated the migration of on-premise applications to a hybrid cloud infrastructure, leveraging AWS and Azure services to maximize flexibility and scalability.",
      tags: ["AWS", "Azure", "Terraform", "CloudFormation", "Lambda", "ExpressRoute"],
      metrics: [
        "Executed phased migration with minimal disruption",
        "Utilized IaC with Terraform and CloudFormation",
        "Integrated serverless computing with AWS Lambda and Azure Functions",
        "Implemented auto-scaling groups and VM Scale Sets",
        "Achieved 40% cost reduction through resource optimization",
        "Improved application performance by 60%",
        "Established robust backup and DR strategy",
        "Configured hybrid networking with Direct Connect and ExpressRoute",
        "Implemented comprehensive monitoring with CloudWatch and Azure Monitor",
        "Ensured security with IAM roles and Azure AD",
        "Adapted CI/CD pipelines for hybrid environments",
        "Optimized cloud resource usage with Reserved and Spot Instances"
      ]
    },
    {
      title: "Monitoring & Automation Suite",
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      description: "Developed a comprehensive Python-based suite of monitoring and automation tools for infrastructure management and incident response, enhancing system reliability.",
      tags: ["Python", "Prometheus", "Grafana", "ELK Stack", "Slack API"],
      metrics: [
        "Integrated Prometheus and Grafana with 50+ custom dashboards",
        "Automated 90% of routine infrastructure checks",
        "Implemented ELK Stack for centralized logging",
        "Created automated alerting systems with Prometheus",
        "Reduced incident response time by 70%",
        "Integrated Slack API for real-time notifications",
        "Designed self-healing infrastructure systems",
        "Developed automated health-check scripts",
        "Built automated remediation workflows"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="relative h-[40vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
        <div className="relative text-center space-y-4 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Systems Administration
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade infrastructure management and automation solutions
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-16 bg-gray-800/50 rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Database className="w-6 h-6 text-cyan-400" />
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-cyan-400">Operating Systems</h3>
              <ul className="text-gray-300 space-y-1">
                <li>Windows Server 2016/2019/2022</li>
                <li>Ubuntu Server 20.04/22.04</li>
                <li>CentOS 7/8/Stream</li>
                <li>Red Hat Enterprise Linux</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-cyan-400">DevOps Tools</h3>
              <ul className="text-gray-300 space-y-1">
                <li>Docker & Kubernetes</li>
                <li>Jenkins & GitLab CI</li>
                <li>Ansible & Terraform</li>
                <li>Prometheus & Grafana</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-cyan-400">Programming</h3>
              <ul className="text-gray-300 space-y-1">
                <li>Python Automation</li>
                <li>PowerShell Scripting</li>
                <li>Bash Scripting</li>
                <li>Infrastructure as Code</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}