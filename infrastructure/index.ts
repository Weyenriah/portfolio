import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";
import * as synced from "@pulumi/synced-folder";

// Create a GCP resource (Storage Bucket)
const bucket = new gcp.storage.Bucket("felicia-portfolio-static-site", {
    location: "EUROPE-WEST2",
    website: {
        mainPageSuffix: "index.html"
    },
    uniformBucketLevelAccess: true,
});

// Export the DNS name of the bucket
export const bucketName = bucket.url;

const folder = new synced.GoogleCloudFolder("felicia-portfolio-static-site-content", {
    bucketName: bucket.name,
    path: "../dist",
});

const bucketBinding = new gcp.storage.BucketIAMBinding("felicia-portfolio-static-site-bucket-binding", {
    bucket: bucket.name,
    role: "roles/storage.objectViewer",
    members: ["allUsers"]
});

export const bucketEndpoint = pulumi.concat("http://storage.googleapis.com/", bucket.name, "/", 'index.html');

const backendBucket = new gcp.compute.BackendBucket("felicia-portfolio-backend-bucket", {
    bucketName: bucket.name,
    description: "Backend bucket for felicia-portfolio-static-site",
    //enableCdn: true,
});

export const backendBucketId = backendBucket.id;

/*const challenge = new gcp.certificatemanager.DnsAuthorization("felicia-portfolio-dns-challenge", {
    description: "DNS for wallin.design",
    domain: "wallin.design",
});
export const recordNameToInsert = challenge.dnsResourceRecords.apply(dnsResourceRecords => dnsResourceRecords[0].name);
export const recordTypeToInsert = challenge.dnsResourceRecords.apply(dnsResourceRecords => dnsResourceRecords[0].type);
export const recordDataToInsert = challenge.dnsResourceRecords.apply(dnsResourceRecords => dnsResourceRecords[0].data);

const certificate = new gcp.certificatemanager.Certificate("felicia-portfolio-cert", {
    description: "Certificate for wallin.design",
    managed: {
        domains: [
            challenge.domain,
        ],
        dnsAuthorizations: [
            challenge.id,
        ],
    },
});

export const certificateName = certificate.name;
export const certificateId = certificate.id;
export const certificateFulls = certificate;

// const newCert = gcp.certificatemanager.get()


const healthCheck = new gcp.compute.HttpHealthCheck("felicia-portfolio-health-check", {
    checkIntervalSec: 60,
    timeoutSec: 5,
    requestPath: "/",
});



const loadBalancer = new gcp.compute.URLMap("felicia-portfolio-load-balancer", {
    description: "Load balancer for felicia-portfolio-static-site",
    defaultService: backendBucket.id,
    hostRules: [{
        hosts: ["wallin.design"],
        pathMatcher: "allpaths",
    }],
    pathMatchers: [{
        name: "allpaths",
        defaultService: backendBucket.id,
        pathRules: [{
            paths: ["/*"],
            service: backendBucket.id,
        }],
    }],
});


const targetProxy = new gcp.compute.TargetHttpsProxy("felicia-portfolio-target", {
    description: "Target proxy for felicia-portfolio-static-site",
    sslCertificates: [certificate.id],
    urlMap: loadBalancer.id,
});


const address = new gcp.compute.Address("felicia-portfolio-address", {
    description: "Address for felicia-portfolio-static-site",
    addressType: "EXTERNAL",
    region: "europe-west2",
});

export const addressName = address.address;

/*const forwardingRule = new gcp.compute.GlobalForwardingRule("felicia-portfolio-forwarding-rule", {
    description: "Forwarding rule for felicia-portfolio-static-site",
    target: targetProxy.id,
    portRange: "443",
    ipAddress: address.address,
});*/